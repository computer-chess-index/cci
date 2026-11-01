# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3305<sub>(+504) | 3545<sub>(+360) | 3613<sub>(+362) |  |
| 2.0 | 2026-10-03 | 2801 | 3185 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3440<sub>(+556) | 3610<sub>(+425) | 3667<sub>(+334) |  |
| 2.0 | 2026-10-03 | 2884 | 3185 | 3333 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-09-28 | 2576 | 2809 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Funcomp+<version>&body=###%20Engine%20name%0AFuncomp%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:38:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2801, 3305]
  line "E1: LTC (60.0+0.60s)" [3185, 3545]
  line "E1: VLTC (2m24s+1.12s)" [3251, 3613]
  line "P1: STC (8.0+0.08s)" [2884, 3440]
  line "P1: LTC (60.0+0.60s)" [3185, 3610]
  line "P1: VLTC (2m24s+1.12s)" [3333, 3667]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3667 | 40 | 154 | 57% | 3610 | 75% |
|  |  | E1 | 3613 | 37 | 184 | 54% | 3580 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3610 | 45 | 128 | 57% | 3545 | 69% |
|  |  | E1 | 3545 | 37 | 192 | 55% | 3503 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3440 | 54 | 96 | 57% | 3351 | 61% |
|  |  | E1 | 3305 | 33 | 256 | 54% | 3263 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3333 | 40 | 192 | 57% | 3240 | 46% |
|  |  | E1 | 3251 | 34 | 272 | 54% | 3183 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3185 | 35 | 262 | 53% | 3102 | 39% |
|  |  | P1 | 3185 | 40 | 212 | 61% | 2969 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2801 | 34 | 302 | 57% | 2678 | 30% |
|  |  | P1 | 2884 | 45 | 168 | 51% | 2857 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |