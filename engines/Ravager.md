# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3407<sub>(+423) | 3656<sub>(+313) | 3700<sub>(+212) |  |
| 3.3.0 | 2026-10-09 | 2984<sub>(+411) | 3343<sub>(+318) | 3488<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2573 | 3025 | 3164 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3569<sub>(+379) | 3792<sub>(+289) | 3791<sub>(+191) |  |
| 3.3.0 | 2026-10-09 | 3190<sub>(+394) | 3503<sub>(+275) | 3600<sub>(+207) |  |
| 2.0 | 2026-08-23 | 2796 | 3228 | 3393 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:41:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2573, 2984, 3407]
  line "E1: LTC (60.0+0.60s)" [3025, 3343, 3656]
  line "E1: VLTC (2m24s+1.12s)" [3164, 3488, 3700]
  line "P1: STC (8.0+0.08s)" [2796, 3190, 3569]
  line "P1: LTC (60.0+0.60s)" [3228, 3503, 3792]
  line "P1: VLTC (2m24s+1.12s)" [3393, 3600, 3791]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3791 | 39 | 160 | 55% | 3757 | 81% |
|  |  | E1 | 3700 | 30 | 254 | 48% | 3711 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3792 | 39 | 152 | 48% | 3803 | 81% |
|  |  | E1 | 3656 | 33 | 218 | 54% | 3627 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3569 | 41 | 148 | 53% | 3542 | 72% |
|  |  | E1 | 3407 | 29 | 328 | 55% | 3364 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3600 | 43 | 134 | 53% | 3578 | 69% |
|  |  | E1 | 3488 | 34 | 208 | 50% | 3486 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3503 | 28 | 322 | 56% | 3456 | 68% |
|  |  | E1 | 3343 | 30 | 280 | 54% | 3310 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3190 | 36 | 216 | 50% | 3179 | 56% |
|  |  | E1 | 2984 | 35 | 234 | 52% | 2963 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3393 | 37 | 204 | 49% | 3403 | 54% |
|  |  | E1 | 3164 | 30 | 302 | 44% | 3214 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3228 | 39 | 184 | 48% | 3241 | 52% |
|  |  | E1 | 3025 | 30 | 322 | 42% | 3089 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 37 | 216 | 48% | 2805 | 43% |
|  |  | E1 | 2573 | 35 | 298 | 39% | 2692 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |