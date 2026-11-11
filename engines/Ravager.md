# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3437<sub>(+414) | 3690<sub>(+311) | 3733<sub>(+212) |  |
| 3.3.0 | 2026-10-09 | 3023<sub>(+419) | 3379<sub>(+320) | 3521<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2604 | 3059 | 3198 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3559<sub>(+378) | 3781<sub>(+289) | 3780<sub>(+190) |  |
| 3.3.0 | 2026-10-09 | 3181<sub>(+396) | 3492<sub>(+275) | 3590<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2785 | 3217 | 3382 |  |
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

Generated: 2026-11-11 05:41:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2600 --> 3800
  line "E1: STC (8.0+0.08s)" [2604, 3023, 3437]
  line "E1: LTC (60.0+0.60s)" [3059, 3379, 3690]
  line "E1: VLTC (2m24s+1.12s)" [3198, 3521, 3733]
  line "P1: STC (8.0+0.08s)" [2785, 3181, 3559]
  line "P1: LTC (60.0+0.60s)" [3217, 3492, 3781]
  line "P1: VLTC (2m24s+1.12s)" [3382, 3590, 3780]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3780 | 39 | 160 | 55% | 3746 | 81% |
|  |  | E1 | 3733 | 30 | 254 | 48% | 3744 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3781 | 40 | 148 | 48% | 3792 | 80% |
|  |  | E1 | 3690 | 33 | 218 | 54% | 3661 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3559 | 41 | 148 | 53% | 3532 | 72% |
|  |  | E1 | 3437 | 29 | 316 | 55% | 3397 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3590 | 43 | 134 | 53% | 3567 | 69% |
|  |  | E1 | 3521 | 34 | 208 | 50% | 3518 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3492 | 28 | 322 | 56% | 3445 | 68% |
|  |  | E1 | 3379 | 31 | 276 | 54% | 3344 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3181 | 36 | 216 | 50% | 3168 | 56% |
|  |  | E1 | 3023 | 36 | 226 | 54% | 2992 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3382 | 37 | 204 | 49% | 3393 | 54% |
|  |  | E1 | 3198 | 30 | 302 | 44% | 3248 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3217 | 39 | 184 | 48% | 3232 | 52% |
|  |  | E1 | 3059 | 30 | 322 | 42% | 3123 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2785 | 37 | 216 | 48% | 2795 | 43% |
|  |  | E1 | 2604 | 35 | 298 | 39% | 2724 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |