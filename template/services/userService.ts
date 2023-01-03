export type Top = {
    message: string;
};

export const indexService = async (): Promise<Top> => {
    const data: Top = { message: 'Hello World' }
    // throw new Error('Test Error');
    return data;
};