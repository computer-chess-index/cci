# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3013<sub>(+101) | 3349<sub>(+151) | 3438<sub>(+125) |  |
| 2.5.0 | 2026-10-05 | 2912<sub>(+356) | 3198<sub>(+267) | 3313<sub>(+238) |  |
| 2.4.0 | 2026-09-11 | 2556 | 2931 | 3075 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3166<sub>(+226) | 3368<sub>(+71) | 3486<sub>(+93) |  |
| 2.5.0 | 2026-10-05 | 2940<sub>(+293) | 3297<sub>(+269) | 3393<sub>(+301) |  |
| 2.4.0 | 2026-09-11 | 2647 | 3028 | 3092 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-28 05:42:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2556, 2912, 3013]
  line "E1: LTC (60.0+0.60s)" [2931, 3198, 3349]
  line "E1: VLTC (2m24s+1.12s)" [3075, 3313, 3438]
  line "P1: STC (8.0+0.08s)" [2647, 2940, 3166]
  line "P1: LTC (60.0+0.60s)" [3028, 3297, 3368]
  line "P1: VLTC (2m24s+1.12s)" [3092, 3393, 3486]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3486 | 39 | 176 | 50% | 3483 | 62% |
|  |  | E1 | 3438 | 33 | 252 | 49% | 3448 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3368 | 46 | 130 | 54% | 3336 | 55% |
|  |  | E1 | 3349 | 33 | 252 | 51% | 3340 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3166 | 56 | 94 | 51% | 3152 | 43% |
|  |  | E1 | 3013 | 37 | 226 | 49% | 3023 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3313 | 30 | 312 | 54% | 3287 | 55% |
|  |  | P1 | 3393 | 36 | 206 | 53% | 3372 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3198 | 33 | 264 | 53% | 3171 | 55% |
|  |  | P1 | 3297 | 35 | 230 | 48% | 3310 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2940 | 45 | 150 | 51% | 2927 | 40% |
|  |  | E1 | 2912 | 32 | 312 | 56% | 2859 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3092 | 39 | 198 | 51% | 3085 | 42% |
|  |  | E1 | 3075 | 29 | 367 | 52% | 3065 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3028 | 42 | 168 | 53% | 2994 | 43% |
|  |  | E1 | 2931 | 32 | 310 | 47% | 2962 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2647 | 46 | 156 | 46% | 2684 | 31% |
|  |  | E1 | 2556 | 36 | 252 | 41% | 2650 | 33% |