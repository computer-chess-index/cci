# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3422<sub>(+418) | 3671<sub>(+309) | 3717<sub>(+214) |  |
| 3.3.0 | 2026-10-09 | 3004<sub>(+415) | 3362<sub>(+320) | 3503<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2589 | 3042 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3611<sub>(+375) | 3834<sub>(+292) | 3831<sub>(+190) |  |
| 3.3.0 | 2026-10-09 | 3236<sub>(+400) | 3542<sub>(+270) | 3641<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2836 | 3272 | 3433 |  |
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

Generated: 2026-11-05 05:41:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3900
  line "E1: STC (8.0+0.08s)" [2589, 3004, 3422]
  line "E1: LTC (60.0+0.60s)" [3042, 3362, 3671]
  line "E1: VLTC (2m24s+1.12s)" [3182, 3503, 3717]
  line "P1: STC (8.0+0.08s)" [2836, 3236, 3611]
  line "P1: LTC (60.0+0.60s)" [3272, 3542, 3834]
  line "P1: VLTC (2m24s+1.12s)" [3433, 3641, 3831]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3831 | 39 | 156 | 55% | 3798 | 81% |
|  |  | E1 | 3717 | 31 | 246 | 48% | 3729 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3834 | 41 | 144 | 48% | 3843 | 81% |
|  |  | E1 | 3671 | 34 | 208 | 54% | 3642 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3422 | 30 | 308 | 55% | 3378 | 61% |
|  |  | P1 | 3611 | 43 | 136 | 53% | 3582 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3641 | 43 | 134 | 53% | 3618 | 69% |
|  |  | E1 | 3503 | 34 | 208 | 50% | 3501 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3542 | 28 | 322 | 56% | 3495 | 68% |
|  |  | E1 | 3362 | 31 | 276 | 54% | 3326 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3236 | 36 | 216 | 50% | 3224 | 56% |
|  |  | E1 | 3004 | 36 | 226 | 54% | 2973 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3433 | 37 | 204 | 49% | 3444 | 54% |
|  |  | E1 | 3182 | 30 | 302 | 44% | 3232 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3272 | 39 | 184 | 48% | 3286 | 52% |
|  |  | E1 | 3042 | 30 | 322 | 42% | 3105 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2589 | 35 | 298 | 39% | 2709 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2836 | 37 | 216 | 48% | 2847 | 43% |