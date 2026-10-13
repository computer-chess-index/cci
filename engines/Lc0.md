# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2016 | 2723 | 2947 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2265 | 3046 | 3243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2408<sub>(+24) | 3015<sub>(+11) | 3178<sub>(-62) |  |
| 0.29.0 | 2022-12-13 | 2384 | 3004 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:40:06

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2384, 2408]
  line "T1: LTC (60.0+0.60s)" [3004, 3015]
  line "T1: VLTC (2m24s+1.12s)" [3240, 3178]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 22 | 556 | 48% | 3193 | 53% |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 43 | 160 | 58% | 3154 | 53% |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 32 | 308 | 57% | 2867 | 42% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 23 | 574 | 49% | 3024 | 46% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 3046 | 41 | 192 | 49% | 3051 | 38% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2723 | 39 | 224 | 54% | 2655 | 35% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2408 | 21 | 814 | 49% | 2415 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2265 | 41 | 196 | 40% | 2357 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2016 | 36 | 296 | 37% | 2147 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 28 | 356 | 50% | 3239 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 30 | 328 | 48% | 3019 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2384 | 32 | 400 | 42% | 2498 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |