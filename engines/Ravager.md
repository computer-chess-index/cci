# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3421<sub>(+415) | 3673<sub>(+310) | 3718<sub>(+213) |  |
| 3.3.0 | 2026-10-09 | 3006<sub>(+417) | 3363<sub>(+320) | 3505<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2589 | 3043 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3559<sub>(+378) | 3780<sub>(+289) | 3779<sub>(+191) |  |
| 3.3.0 | 2026-10-09 | 3181<sub>(+397) | 3491<sub>(+273) | 3588<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2784 | 3218 | 3380 |  |
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

Generated: 2026-11-10 05:41:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2589, 3006, 3421]
  line "E1: LTC (60.0+0.60s)" [3043, 3363, 3673]
  line "E1: VLTC (2m24s+1.12s)" [3182, 3505, 3718]
  line "P1: STC (8.0+0.08s)" [2784, 3181, 3559]
  line "P1: LTC (60.0+0.60s)" [3218, 3491, 3780]
  line "P1: VLTC (2m24s+1.12s)" [3380, 3588, 3779]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3779 | 39 | 156 | 55% | 3744 | 81% |
|  |  | E1 | 3718 | 30 | 254 | 48% | 3729 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3780 | 40 | 148 | 48% | 3791 | 80% |
|  |  | E1 | 3673 | 33 | 214 | 54% | 3645 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3559 | 41 | 148 | 53% | 3532 | 72% |
|  |  | E1 | 3421 | 29 | 316 | 55% | 3380 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3588 | 43 | 134 | 53% | 3565 | 69% |
|  |  | E1 | 3505 | 34 | 208 | 50% | 3502 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 28 | 322 | 56% | 3444 | 68% |
|  |  | E1 | 3363 | 31 | 276 | 54% | 3328 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3181 | 36 | 216 | 50% | 3168 | 56% |
|  |  | E1 | 3006 | 36 | 226 | 54% | 2975 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3380 | 37 | 204 | 49% | 3391 | 54% |
|  |  | E1 | 3182 | 30 | 302 | 44% | 3232 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3218 | 39 | 184 | 48% | 3232 | 52% |
|  |  | E1 | 3043 | 30 | 322 | 42% | 3106 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2784 | 37 | 216 | 48% | 2795 | 43% |
|  |  | E1 | 2589 | 35 | 298 | 39% | 2708 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |