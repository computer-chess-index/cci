# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3189<sub>(+192) | 3414<sub>(+113) | 3467<sub>(+96) |  |
| 1.9.1 | 2026-10-18 | 2997<sub>(+205) | 3301<sub>(+184) | 3371<sub>(+189) |  |
| 1.9.0 | 2026-10-16 | 2792 | 3117 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3175<sub>(+173) | 3356<sub>(+73) | 3447<sub>(+121) |  |
| 1.9.1 | 2026-10-18 | 3002<sub>(+193) | 3283<sub>(+173) | 3326<sub>(+143) |  |
| 1.9.0 | 2026-10-16 | 2809 | 3110 | 3183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2809 | 3110 | 3183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:43:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2792, 2997, 3189]
  line "E1: LTC (60.0+0.60s)" [3117, 3301, 3414]
  line "E1: VLTC (2m24s+1.12s)" [3182, 3371, 3467]
  line "P1: STC (8.0+0.08s)" [2809, 3002, 3175]
  line "P1: LTC (60.0+0.60s)" [3110, 3283, 3356]
  line "P1: VLTC (2m24s+1.12s)" [3183, 3326, 3447]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3447 | 31 | 258 | 55% | 3414 | 76% |
|  |  | E1 | 3467 | 33 | 226 | 51% | 3460 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3356 | 42 | 140 | 51% | 3352 | 76% |
|  |  | E1 | 3414 | 28 | 334 | 53% | 3395 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3175 | 35 | 222 | 53% | 3151 | 60% |
|  |  | E1 | 3189 | 33 | 254 | 52% | 3171 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3326 | 35 | 210 | 52% | 3314 | 62% |
|  |  | E1 | 3371 | 28 | 322 | 51% | 3364 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3283 | 35 | 220 | 50% | 3282 | 59% |
|  |  | E1 | 3301 | 32 | 276 | 53% | 3281 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3002 | 42 | 164 | 50% | 3004 | 47% |
|  |  | E1 | 2997 | 29 | 368 | 53% | 2973 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3183 | 43 | 194 | 60% | 2950 | 39% |
|  |  | E1 | 3182 | 34 | 292 | 55% | 3031 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3110 | 50 | 150 | 62% | 2800 | 32% |
|  |  | E1 | 3117 | 42 | 214 | 62% | 2834 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2809 | 47 | 176 | 58% | 2597 | 26% |
|  |  | E1 | 2792 | 42 | 220 | 61% | 2545 | 26% |