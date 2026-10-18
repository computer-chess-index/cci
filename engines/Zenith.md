# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 2921<sub>(+170) | 3241<sub>(+205) | 3351<sub>(+151) |  |
| 1.2.198 | 2026-08-01 | 2751 | 3036 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 3069<sub>(+256) | 3399<sub>(+158) | 3457<sub>(+70) |  |
| 1.2.198 | 2026-08-01 | 2813 | 3241 | 3387 |  |
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

Generated: 2026-10-18 04:44:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2751, 2921]
  line "E1: LTC (60.0+0.60s)" [3036, 3241]
  line "E1: VLTC (2m24s+1.12s)" [3200, 3351]
  line "P1: STC (8.0+0.08s)" [2813, 3069]
  line "P1: LTC (60.0+0.60s)" [3241, 3399]
  line "P1: VLTC (2m24s+1.12s)" [3387, 3457]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3457 | 43 | 136 | 51% | 3447 | 66% |
|  |  | E1 | 3351 | 34 | 228 | 50% | 3352 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3399 | 44 | 130 | 54% | 3374 | 68% |
|  |  | E1 | 3241 | 38 | 186 | 53% | 3216 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3069 | 42 | 172 | 54% | 3032 | 42% |
|  |  | E1 | 2921 | 43 | 164 | 54% | 2878 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3387 | 33 | 252 | 44% | 3428 | 61% |
|  |  | E1 | 3200 | 29 | 326 | 41% | 3272 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3241 | 32 | 288 | 39% | 3326 | 55% |
|  |  | E1 | 3036 | 28 | 370 | 39% | 3128 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2813 | 46 | 168 | 57% | 2746 | 27% |
|  |  | E1 | 2751 | 34 | 308 | 64% | 2622 | 29% |