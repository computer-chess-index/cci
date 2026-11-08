# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2842<sub>(+27) | 3194<sub>(-14) | 3335<sub>(+68) |  |
| 4.1.1 | 2026-11-02 | 2815<sub>(-4) | 3208<sub>(+18) | 3267<sub>(-12) |  |
| 4.1.0 | 2026-10-16 | 2819 | 3190 | 3279 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2935<sub>(+18) | 3294<sub>(+26) | 3380<sub>(+16) |  |
| 4.1.1 | 2026-11-02 | 2917<sub>(+48) | 3268<sub>(-25) | 3364<sub>(-14) |  |
| 4.1.0 | 2026-10-16 | 2869 | 3293 | 3378 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2869 | 3293 | 3378 |  |
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

Generated: 2026-11-08 05:39:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2819, 2815, 2842]
  line "E1: LTC (60.0+0.60s)" [3190, 3208, 3194]
  line "E1: VLTC (2m24s+1.12s)" [3279, 3267, 3335]
  line "P1: STC (8.0+0.08s)" [2869, 2917, 2935]
  line "P1: LTC (60.0+0.60s)" [3293, 3268, 3294]
  line "P1: VLTC (2m24s+1.12s)" [3378, 3364, 3380]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3335 | 29 | 312 | 49% | 3343 | 67% |
|  |  | P1 | 3380 | 43 | 136 | 48% | 3393 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3194 | 36 | 202 | 50% | 3189 | 60% |
|  |  | P1 | 3294 | 44 | 136 | 49% | 3303 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2842 | 36 | 230 | 49% | 2849 | 40% |
|  |  | P1 | 2935 | 45 | 152 | 47% | 2961 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3364 | 38 | 188 | 52% | 3349 | 59% |
|  |  | E1 | 3267 | 34 | 232 | 49% | 3272 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3268 | 43 | 158 | 55% | 3231 | 46% |
|  |  | E1 | 3208 | 40 | 168 | 50% | 3204 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2917 | 50 | 124 | 56% | 2862 | 36% |
|  |  | E1 | 2815 | 36 | 236 | 48% | 2832 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 38 | 190 | 52% | 3333 | 60% |
|  |  | E1 | 3279 | 32 | 280 | 56% | 3202 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3293 | 42 | 174 | 56% | 3123 | 48% |
|  |  | E1 | 3190 | 33 | 294 | 58% | 3038 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2869 | 38 | 240 | 54% | 2697 | 35% |
|  |  | E1 | 2819 | 34 | 298 | 57% | 2584 | 36% |