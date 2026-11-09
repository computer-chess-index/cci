# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2836<sub>(+25) | 3200<sub>(-4) | 3332<sub>(+68) |  |
| 4.1.1 | 2026-11-02 | 2811<sub>(-2) | 3204<sub>(+18) | 3264<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2813 | 3186 | 3275 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2934<sub>(+17) | 3297<sub>(+27) | 3378<sub>(+12) |  |
| 4.1.1 | 2026-11-02 | 2917<sub>(+48) | 3270<sub>(-24) | 3366<sub>(-13) |  |
| 4.1.0 | 2026-10-16 | 2869 | 3294 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2869 | 3294 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:39:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2813, 2811, 2836]
  line "E1: LTC (60.0+0.60s)" [3186, 3204, 3200]
  line "E1: VLTC (2m24s+1.12s)" [3275, 3264, 3332]
  line "P1: STC (8.0+0.08s)" [2869, 2917, 2934]
  line "P1: LTC (60.0+0.60s)" [3294, 3270, 3297]
  line "P1: VLTC (2m24s+1.12s)" [3379, 3366, 3378]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 39 | 164 | 48% | 3390 | 68% |
|  |  | E1 | 3332 | 28 | 332 | 49% | 3337 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3297 | 44 | 140 | 49% | 3305 | 60% |
|  |  | E1 | 3200 | 35 | 222 | 52% | 3186 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2934 | 44 | 160 | 47% | 2963 | 41% |
|  |  | E1 | 2836 | 36 | 234 | 49% | 2844 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3366 | 38 | 188 | 52% | 3351 | 59% |
|  |  | E1 | 3264 | 34 | 232 | 49% | 3270 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3270 | 43 | 158 | 55% | 3232 | 46% |
|  |  | E1 | 3204 | 40 | 168 | 50% | 3200 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2917 | 50 | 124 | 56% | 2862 | 36% |
|  |  | E1 | 2811 | 36 | 236 | 48% | 2827 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3275 | 32 | 280 | 56% | 3198 | 55% |
|  |  | P1 | 3379 | 38 | 190 | 52% | 3335 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3186 | 33 | 294 | 58% | 3033 | 45% |
|  |  | P1 | 3294 | 42 | 174 | 56% | 3123 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2813 | 34 | 298 | 57% | 2579 | 36% |
|  |  | P1 | 2869 | 38 | 240 | 54% | 2697 | 35% |