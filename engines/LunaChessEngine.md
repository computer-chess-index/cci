# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2851<sub>(+19) | 3216<sub>(-11) | 3345<sub>(+59) |  |
| 4.1.1 | 2026-11-02 | 2832<sub>(-4) | 3227<sub>(+19) | 3286<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2836 | 3208 | 3297 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2935<sub>(+16) | 3294<sub>(+24) | 3386<sub>(+20) |  |
| 4.1.1 | 2026-11-02 | 2919<sub>(+49) | 3270<sub>(-24) | 3366<sub>(-14) |  |
| 4.1.0 | 2026-10-16 | 2870 | 3294 | 3380 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2870 | 3294 | 3380 |  |
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

Generated: 2026-11-11 05:39:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2836, 2832, 2851]
  line "E1: LTC (60.0+0.60s)" [3208, 3227, 3216]
  line "E1: VLTC (2m24s+1.12s)" [3297, 3286, 3345]
  line "P1: STC (8.0+0.08s)" [2870, 2919, 2935]
  line "P1: LTC (60.0+0.60s)" [3294, 3270, 3294]
  line "P1: VLTC (2m24s+1.12s)" [3380, 3366, 3386]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3386 | 37 | 180 | 49% | 3391 | 69% |
|  |  | E1 | 3345 | 26 | 376 | 49% | 3355 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3294 | 40 | 164 | 48% | 3303 | 62% |
|  |  | E1 | 3216 | 34 | 238 | 51% | 3209 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2935 | 43 | 168 | 47% | 2963 | 40% |
|  |  | E1 | 2851 | 35 | 246 | 48% | 2867 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3366 | 38 | 188 | 52% | 3351 | 59% |
|  |  | E1 | 3286 | 34 | 232 | 49% | 3291 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3270 | 43 | 158 | 55% | 3232 | 46% |
|  |  | E1 | 3227 | 40 | 168 | 50% | 3221 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2919 | 50 | 124 | 56% | 2863 | 36% |
|  |  | E1 | 2832 | 36 | 236 | 48% | 2850 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3297 | 32 | 280 | 56% | 3220 | 55% |
|  |  | P1 | 3380 | 38 | 190 | 52% | 3337 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3208 | 33 | 294 | 58% | 3056 | 45% |
|  |  | P1 | 3294 | 42 | 174 | 56% | 3124 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2836 | 34 | 298 | 57% | 2600 | 36% |
|  |  | P1 | 2870 | 38 | 240 | 54% | 2697 | 35% |