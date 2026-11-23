# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3200<sub>(+196) | 3425<sub>(+109) | 3479<sub>(+95) |  |
| 1.9.1 | 2026-10-18 | 3004<sub>(+211) | 3316<sub>(+193) | 3384<sub>(+195) |  |
| 1.9.0 | 2026-10-16 | 2793 | 3123 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3183<sub>(+152) | 3362<sub>(+76) | 3452<sub>(+122) |  |
| 1.9.1 | 2026-10-18 | 3031<sub>(+181) | 3286<sub>(+155) | 3330<sub>(+135) |  |
| 1.9.0 | 2026-10-16 | 2850 | 3131 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2850 | 3131 | 3195 |  |
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

Generated: 2026-11-23 05:43:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2793, 3004, 3200]
  line "E1: LTC (60.0+0.60s)" [3123, 3316, 3425]
  line "E1: VLTC (2m24s+1.12s)" [3189, 3384, 3479]
  line "P1: STC (8.0+0.08s)" [2850, 3031, 3183]
  line "P1: LTC (60.0+0.60s)" [3131, 3286, 3362]
  line "P1: VLTC (2m24s+1.12s)" [3195, 3330, 3452]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3452 | 30 | 266 | 54% | 3424 | 76% |
|  |  | E1 | 3479 | 32 | 242 | 51% | 3471 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3362 | 42 | 140 | 51% | 3357 | 76% |
|  |  | E1 | 3425 | 27 | 346 | 53% | 3406 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3183 | 32 | 258 | 52% | 3171 | 60% |
|  |  | E1 | 3200 | 30 | 298 | 53% | 3179 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3330 | 35 | 210 | 52% | 3320 | 62% |
|  |  | E1 | 3384 | 28 | 342 | 51% | 3374 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3286 | 33 | 244 | 49% | 3293 | 59% |
|  |  | E1 | 3316 | 30 | 302 | 53% | 3293 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3031 | 41 | 172 | 50% | 3032 | 46% |
|  |  | E1 | 3004 | 28 | 388 | 53% | 2979 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3195 | 42 | 194 | 60% | 2965 | 39% |
|  |  | E1 | 3189 | 34 | 292 | 55% | 3035 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3131 | 50 | 150 | 62% | 2819 | 32% |
|  |  | E1 | 3123 | 42 | 214 | 62% | 2832 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2850 | 47 | 176 | 58% | 2633 | 26% |
|  |  | E1 | 2793 | 42 | 220 | 61% | 2542 | 26% |