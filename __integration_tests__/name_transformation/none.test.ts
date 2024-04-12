import { BASE_SECRET_DATASET } from "../base_secret_dataset";

describe('No Transformation Variables Assert', () => {
    it.each([
        ...BASE_SECRET_DATASET,
        ...[
            // Alias test
            ['SampleSecret1_alias', 'SomeSampleSecret1']
        ]
    ])('Secret with name %s test', (secretName, expectedValue) => {
        const secretValue = process.env[secretName];
        expect(secretValue).toBe(expectedValue);
    });
});