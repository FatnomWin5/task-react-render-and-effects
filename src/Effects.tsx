import { useEffect, useState } from 'react';
import { isPropertySignature } from 'typescript';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    //return <div>123</div>;
    const callback = (MessageID: number) => {
        setMessage(MessageID);
    };
    const [lastMessage, setMessage] = useState(-1);

    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            setMessage(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
