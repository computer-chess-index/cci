# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2851<sub>(-25) | 3194<sub>(-41) | 3306<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2876<sub>(+81) | 3235<sub>(+79) | 3263<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2795 | 3156 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2981<sub>(-35) | 3362<sub>(+22) | 3416<sub>(-14) |  |
| 1.0.0 | 2026-10-15 | 3016<sub>(+72) | 3340<sub>(-13) | 3430<sub>(+64) |  |
| 0.13.593 | 2026-06-30 | 2944 | 3353 | 3366 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-04 05:40:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2795, 2876, 2851]
  line "E1: LTC (60.0+0.60s)" [3156, 3235, 3194]
  line "E1: VLTC (2m24s+1.12s)" [3256, 3263, 3306]
  line "P1: STC (8.0+0.08s)" [2944, 3016, 2981]
  line "P1: LTC (60.0+0.60s)" [3353, 3340, 3362]
  line "P1: VLTC (2m24s+1.12s)" [3366, 3430, 3416]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3306 | 29 | 316 | 53% | 3282 | 63% |
|  |  | P1 | 3416 | 37 | 184 | 47% | 3437 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3194 | 30 | 320 | 54% | 3160 | 52% |
|  |  | P1 | 3362 | 43 | 144 | 49% | 3367 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2851 | 39 | 204 | 48% | 2865 | 39% |
|  |  | P1 | 2981 | 38 | 212 | 45% | 3027 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3430 | 40 | 160 | 50% | 3434 | 66% |
|  |  | E1 | 3263 | 34 | 232 | 50% | 3262 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3340 | 39 | 180 | 50% | 3336 | 58% |
|  |  | E1 | 3235 | 32 | 276 | 51% | 3228 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3016 | 38 | 198 | 52% | 2997 | 45% |
|  |  | E1 | 2876 | 28 | 394 | 47% | 2901 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3366 | 35 | 220 | 46% | 3397 | 56% |
|  |  | E1 | 3256 | 30 | 312 | 47% | 3276 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3156 | 31 | 300 | 48% | 3175 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3353 | 34 | 248 | 52% | 3335 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2795 | 30 | 382 | 46% | 2832 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2944 | 41 | 192 | 46% | 2982 | 35% |