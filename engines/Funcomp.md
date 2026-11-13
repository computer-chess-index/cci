# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3251<sub>(+31) | 3491<sub>(+35) | 3522<sub>(+4) |  |
| 3.0 | 2026-10-20 | 3220<sub>(+497) | 3456<sub>(+359) | 3518<sub>(+351) |  |
| 2.0 | 2026-10-03 | 2723 | 3097 | 3167 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3336<sub>(+54) | 3506<sub>(+57) | 3555<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3282<sub>(+558) | 3449<sub>(+426) | 3502<sub>(+329) |  |
| 2.0 | 2026-10-03 | 2724 | 3023 | 3173 |  |
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

Generated: 2026-11-13 05:38:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2723, 3220, 3251]
  line "E1: LTC (60.0+0.60s)" [3097, 3456, 3491]
  line "E1: VLTC (2m24s+1.12s)" [3167, 3518, 3522]
  line "P1: STC (8.0+0.08s)" [2724, 3282, 3336]
  line "P1: LTC (60.0+0.60s)" [3023, 3449, 3506]
  line "P1: VLTC (2m24s+1.12s)" [3173, 3502, 3555]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3522 | 33 | 218 | 50% | 3525 | 83% |
|  |  | P1 | 3555 | 36 | 178 | 52% | 3540 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3491 | 31 | 252 | 52% | 3480 | 76% |
|  |  | P1 | 3506 | 37 | 184 | 53% | 3484 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3336 | 38 | 176 | 51% | 3333 | 65% |
|  |  | E1 | 3251 | 33 | 244 | 51% | 3243 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3502 | 40 | 158 | 57% | 3448 | 75% |
|  |  | E1 | 3518 | 35 | 200 | 53% | 3494 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3449 | 44 | 132 | 57% | 3386 | 70% |
|  |  | E1 | 3456 | 36 | 196 | 55% | 3416 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3282 | 53 | 100 | 57% | 3195 | 61% |
|  |  | E1 | 3220 | 33 | 260 | 54% | 3178 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3173 | 40 | 192 | 57% | 3081 | 46% |
|  |  | E1 | 3167 | 34 | 272 | 54% | 3101 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3023 | 40 | 212 | 61% | 2816 | 43% |
|  |  | E1 | 3097 | 35 | 262 | 53% | 3019 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2724 | 45 | 168 | 51% | 2700 | 28% |
|  |  | E1 | 2723 | 34 | 302 | 57% | 2606 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |