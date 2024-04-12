import { BASE_SECRET_DATASET } from "../base_secret_dataset";

describe('Uppercased Transformation Variables Assert', () => {
    it.each([
        ...BASE_SECRET_DATASET,
        ...[
            // Alias test
            ['SAMPLESECRET1_ALIAS', 'SomeSampleSecret1']
        ]
    ])('Secret with name %s test', (secretName, expectedValue) => {
        const secretValue = process.env[secretName.toUpperCase()];
        expect(secretValue).toBe(expectedValue);
    });
});