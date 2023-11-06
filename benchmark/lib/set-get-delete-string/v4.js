import { createClient } from '@falkordb/client';

export default async (host, { randomString }) => {
    const client = createClient({
        socket: {
            host
        }
    });

    await client.connect();

    return {
        benchmark() {
            return Promise.all([
                client.set(randomString, randomString),
                client.get(randomString),
                client.del(randomString)
            ]);
        },
        teardown() {
            return client.disconnect();
        }
    };
};
