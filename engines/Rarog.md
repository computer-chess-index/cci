# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2703<sub>(+7) | 3056<sub>(+17) | 3132<sub>(+4) |  |
| 2.5.0 | 2026-10-05 | 2696<sub>(+261) | 3039<sub>(+227) | 3128<sub>(+181) |  |
| 2.4.0 | 2026-09-11 | 2435 | 2812 | 2947 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 3019<sub>(+342) | 3374<sub>(+324) | 3368<sub>(+255) |  |
| 2.4.0 | 2026-09-11 | 2677 | 3050 | 3113 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-11 17:20:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.5.0"]
  y-axis "Elo Rating" 2400 --> 3400
  line "E1: STC (8.0+0.08s)" [2435, 2696, 2703]
  line "E1: LTC (60.0+0.60s)" [2812, 3039, 3056]
  line "E1: VLTC (2m24s+1.12s)" [2947, 3128, 3132]
  line "P1: STC (8.0+0.08s)" [2677, 3019]
  line "P1: LTC (60.0+0.60s)" [3050, 3374]
  line "P1: VLTC (2m24s+1.12s)" [3113, 3368]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 117 | 22 | 59% | 3289 | 36% |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3132 | 61 | 72 | 56% | 3093 | 58% |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3128 | 80 | 40 | 59% | 3065 | 68% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3056 | 67 | 64 | 61% | 2969 | 50% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3039 | 82 | 44 | 63% | 2939 | 48% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 116 | 24 | 58% | 3293 | 33% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2703 | 70 | 64 | 59% | 2612 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2696 | 85 | 44 | 63% | 2577 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 3019 | 98 | 32 | 61% | 2911 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 29 | 365 | 52% | 2936 | 40% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 35 | 256 | 53% | 2984 | 40% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 39 | 198 | 51% | 3106 | 42% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2812 | 33 | 294 | 47% | 2840 | 39% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2930 | 33 | 292 | 57% | 2861 | 38% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3050 | 42 | 168 | 53% | 3016 | 43% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2614 | 36 | 266 | 52% | 2564 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2677 | 46 | 156 | 46% | 2714 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2435 | 37 | 248 | 41% | 2530 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |