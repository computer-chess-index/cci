# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3113<sub>(+166) | 3494<sub>(+154) | 3538<sub>(+104) |  |
| 3.1 | 2026-10-21 | 2947<sub>(+73) | 3340<sub>(+5) | 3434<sub>(-6) |  |
| 3.0 | 2026-10-17 | 2874<sub>(+260) | 3335<sub>(+160) | 3440<sub>(+207) |  |
| 2.9.5 | 2026-10-15 | 2614<sub>(+200) | 3175<sub>(+189) | 3233<sub>(+170) |  |
| 1.6 | 2026-10-07 | 2414 | 2986 | 3063 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3301<sub>(+273) | 3594<sub>(+126) | 3654<sub>(+108) |  |
| 3.1 | 2026-10-21 | 3028<sub>(+12) | 3468<sub>(+47) | 3546<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3016<sub>(+205) | 3421<sub>(+172) | 3532<sub>(+172) |  |
| 2.9.5 | 2026-10-15 | 2811<sub>(+330) | 3249<sub>(+233) | 3360<sub>(+235) |  |
| 1.6 | 2026-10-07 | 2481 | 3016 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2481 | 3016 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A3.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:37:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3700
  line "E1: STC (8.0+0.08s)" [2414, 2614, 2874, 2947, 3113]
  line "E1: LTC (60.0+0.60s)" [2986, 3175, 3335, 3340, 3494]
  line "E1: VLTC (2m24s+1.12s)" [3063, 3233, 3440, 3434, 3538]
  line "P1: STC (8.0+0.08s)" [2481, 2811, 3016, 3028, 3301]
  line "P1: LTC (60.0+0.60s)" [3016, 3249, 3421, 3468, 3594]
  line "P1: VLTC (2m24s+1.12s)" [3125, 3360, 3532, 3546, 3654]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3538 | 34 | 212 | 53% | 3521 | 74% |
|  |  | P1 | 3654 | 37 | 172 | 53% | 3634 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3494 | 29 | 298 | 53% | 3471 | 74% |
|  |  | P1 | 3594 | 41 | 144 | 52% | 3579 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3113 | 35 | 230 | 52% | 3093 | 50% |
|  |  | P1 | 3301 | 46 | 126 | 52% | 3281 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3546 | 29 | 300 | 54% | 3518 | 68% |
|  |  | E1 | 3434 | 29 | 306 | 52% | 3417 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3468 | 34 | 228 | 50% | 3471 | 62% |
|  |  | E1 | 3340 | 34 | 224 | 50% | 3344 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3028 | 51 | 112 | 49% | 3039 | 47% |
|  |  | E1 | 2947 | 34 | 276 | 49% | 2952 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 46 | 122 | 50% | 3533 | 68% |
|  |  | E1 | 3440 | 31 | 270 | 50% | 3438 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3421 | 49 | 106 | 56% | 3375 | 69% |
|  |  | E1 | 3335 | 31 | 274 | 49% | 3344 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3016 | 52 | 116 | 57% | 2958 | 38% |
|  |  | E1 | 2874 | 41 | 174 | 53% | 2844 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3233 | 34 | 244 | 50% | 3235 | 48% |
|  |  | P1 | 3360 | 37 | 196 | 52% | 3348 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3175 | 41 | 168 | 51% | 3164 | 50% |
|  |  | P1 | 3249 | 50 | 118 | 54% | 3217 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2811 | 41 | 196 | 53% | 2781 | 34% |
|  |  | E1 | 2614 | 36 | 254 | 55% | 2568 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3063 | 43 | 168 | 55% | 2994 | 43% |
|  |  | P1 | 3125 | 50 | 130 | 55% | 3058 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2986 | 40 | 218 | 57% | 2839 | 35% |
|  |  | P1 | 3016 | 57 | 116 | 63% | 2732 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2414 | 46 | 184 | 57% | 2292 | 23% |
|  |  | P1 | 2481 | 62 | 90 | 43% | 2546 | 24% |