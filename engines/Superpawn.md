# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3202<sub>(+197) | 3426<sub>(+110) | 3476<sub>(+92) |  |
| 1.9.1 | 2026-10-18 | 3005<sub>(+210) | 3316<sub>(+193) | 3384<sub>(+195) |  |
| 1.9.0 | 2026-10-16 | 2795 | 3123 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3186<sub>(+153) | 3364<sub>(+74) | 3455<sub>(+122) |  |
| 1.9.1 | 2026-10-18 | 3033<sub>(+179) | 3290<sub>(+155) | 3333<sub>(+133) |  |
| 1.9.0 | 2026-10-16 | 2854 | 3135 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2854 | 3135 | 3200 |  |
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

Generated: 2026-11-24 05:43:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2795, 3005, 3202]
  line "E1: LTC (60.0+0.60s)" [3123, 3316, 3426]
  line "E1: VLTC (2m24s+1.12s)" [3189, 3384, 3476]
  line "P1: STC (8.0+0.08s)" [2854, 3033, 3186]
  line "P1: LTC (60.0+0.60s)" [3135, 3290, 3364]
  line "P1: VLTC (2m24s+1.12s)" [3200, 3333, 3455]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3476 | 32 | 246 | 51% | 3470 | 73% |
|  |  | P1 | 3455 | 30 | 266 | 54% | 3426 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3426 | 27 | 350 | 53% | 3406 | 69% |
|  |  | P1 | 3364 | 41 | 144 | 51% | 3360 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3186 | 32 | 258 | 52% | 3174 | 60% |
|  |  | E1 | 3202 | 30 | 306 | 53% | 3181 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3333 | 35 | 210 | 52% | 3322 | 62% |
|  |  | E1 | 3384 | 28 | 342 | 51% | 3375 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3290 | 33 | 244 | 49% | 3295 | 59% |
|  |  | E1 | 3316 | 30 | 302 | 53% | 3293 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3033 | 41 | 172 | 50% | 3035 | 46% |
|  |  | E1 | 3005 | 28 | 388 | 53% | 2981 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3200 | 42 | 194 | 60% | 2967 | 39% |
|  |  | E1 | 3189 | 34 | 292 | 55% | 3035 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3135 | 50 | 150 | 62% | 2822 | 32% |
|  |  | E1 | 3123 | 42 | 214 | 62% | 2832 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2854 | 47 | 176 | 58% | 2635 | 26% |
|  |  | E1 | 2795 | 42 | 220 | 61% | 2543 | 26% |