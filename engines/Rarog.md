# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2751<sub>(+310) | 3047<sub>(+235) | 3156<sub>(+202) |  |
| 2.4.0 | 2026-09-11 | 2441 | 2812 | 2954 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-10-05 | 2932<sub>(+274) | 3360<sub>(+328) | 3399<sub>(+303) |  |
| 2.4.0 | 2026-09-11 | 2658 | 3032 | 3096 |  |
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

Generated: 2026-10-13 04:42:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0"]
  y-axis "Elo Rating" 2400 --> 3400
  line "E1: STC (8.0+0.08s)" [2441, 2751]
  line "E1: LTC (60.0+0.60s)" [2812, 3047]
  line "E1: VLTC (2m24s+1.12s)" [2954, 3156]
  line "P1: STC (8.0+0.08s)" [2658, 2932]
  line "P1: LTC (60.0+0.60s)" [3032, 3360]
  line "P1: VLTC (2m24s+1.12s)" [3096, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 72 | 52 | 59% | 3328 | 60% |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 49 | 116 | 55% | 3120 | 54% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 90 | 36 | 57% | 3295 | 47% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3047 | 50 | 114 | 54% | 3015 | 54% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2751 | 48 | 136 | 58% | 2677 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2932 | 74 | 56 | 50% | 2921 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2954 | 29 | 367 | 52% | 2943 | 41% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 35 | 256 | 53% | 2984 | 40% |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 39 | 198 | 51% | 3087 | 42% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2930 | 33 | 292 | 57% | 2861 | 38% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3032 | 42 | 168 | 53% | 2998 | 43% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2812 | 32 | 306 | 47% | 2844 | 38% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2614 | 36 | 266 | 52% | 2564 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2658 | 46 | 156 | 46% | 2695 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2441 | 36 | 252 | 41% | 2535 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |