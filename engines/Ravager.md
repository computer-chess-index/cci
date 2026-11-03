# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3417<sub>(+413) | 3667<sub>(+307) | 3715<sub>(+213) |  |
| 3.3.0 | 2026-10-09 | 3004<sub>(+413) | 3360<sub>(+317) | 3502<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2591 | 3043 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3552<sub>(+377) | 3775<sub>(+292) | 3771<sub>(+189) |  |
| 3.3.0 | 2026-10-09 | 3175<sub>(+395) | 3483<sub>(+270) | 3582<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2780 | 3213 | 3372 |  |
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

Generated: 2026-11-03 05:41:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2591, 3004, 3417]
  line "E1: LTC (60.0+0.60s)" [3043, 3360, 3667]
  line "E1: VLTC (2m24s+1.12s)" [3181, 3502, 3715]
  line "P1: STC (8.0+0.08s)" [2780, 3175, 3552]
  line "P1: LTC (60.0+0.60s)" [3213, 3483, 3775]
  line "P1: VLTC (2m24s+1.12s)" [3372, 3582, 3771]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3771 | 41 | 144 | 56% | 3734 | 79% |
|  |  | E1 | 3715 | 32 | 226 | 47% | 3730 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3775 | 42 | 136 | 48% | 3784 | 79% |
|  |  | E1 | 3667 | 38 | 170 | 54% | 3633 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3552 | 43 | 136 | 53% | 3522 | 71% |
|  |  | E1 | 3417 | 31 | 276 | 56% | 3371 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3502 | 34 | 208 | 50% | 3499 | 76% |
|  |  | P1 | 3582 | 43 | 134 | 53% | 3559 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3360 | 31 | 276 | 54% | 3325 | 68% |
|  |  | P1 | 3483 | 28 | 322 | 56% | 3436 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3004 | 36 | 226 | 54% | 2974 | 48% |
|  |  | P1 | 3175 | 36 | 216 | 50% | 3164 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3372 | 37 | 204 | 49% | 3384 | 54% |
|  |  | E1 | 3181 | 30 | 302 | 44% | 3231 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3213 | 39 | 184 | 48% | 3227 | 52% |
|  |  | E1 | 3043 | 30 | 322 | 42% | 3106 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2780 | 37 | 216 | 48% | 2790 | 43% |
|  |  | E1 | 2591 | 35 | 298 | 39% | 2709 | 26% |