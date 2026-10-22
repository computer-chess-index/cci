# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 2988<sub>(+175) | 3310<sub>(+205) | 3417<sub>(+146) |  |
| 1.2.198 | 2026-08-01 | 2813 | 3105 | 3271 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 3101<sub>(+230) | 3434<sub>(+160) | 3498<sub>(+77) |  |
| 1.2.198 | 2026-08-01 | 2871 | 3274 | 3421 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zenith+<version>&body=###%20Engine%20name%0AZenith%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-22 04:45:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2813, 2988]
  line "E1: LTC (60.0+0.60s)" [3105, 3310]
  line "E1: VLTC (2m24s+1.12s)" [3271, 3417]
  line "P1: STC (8.0+0.08s)" [2871, 3101]
  line "P1: LTC (60.0+0.60s)" [3274, 3434]
  line "P1: VLTC (2m24s+1.12s)" [3421, 3498]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3498 | 36 | 200 | 51% | 3490 | 69% |
|  |  | E1 | 3417 | 30 | 280 | 49% | 3425 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3434 | 41 | 154 | 54% | 3411 | 66% |
|  |  | E1 | 3310 | 36 | 208 | 53% | 3290 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3101 | 40 | 188 | 53% | 3066 | 43% |
|  |  | E1 | 2988 | 39 | 196 | 53% | 2952 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3421 | 33 | 252 | 44% | 3461 | 61% |
|  |  | E1 | 3271 | 29 | 326 | 41% | 3344 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3105 | 28 | 370 | 39% | 3198 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3274 | 32 | 288 | 39% | 3359 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2813 | 34 | 308 | 64% | 2685 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2871 | 45 | 180 | 59% | 2778 | 26% |