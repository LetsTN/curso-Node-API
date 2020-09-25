import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import * as stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StromGlass client', () => {
	const mockedAxios = axios as jest.Mocked<typeof axios>;
	it('should return the normalized forecast from the StromGlass service', async () => {
		const lat = -20.1853424;
		const lng = -40.2665432;

		mockedAxios.get.mockResolvedValue({ data: stormglassWeatherPointFixture });

		const stormGlass = new StormGlass(mockedAxios);
		const response = await stormGlass.fetchPoints(lat, lng);

		expect(response).toEqual(stormGlassNormalized3HoursFixture);
	});
});