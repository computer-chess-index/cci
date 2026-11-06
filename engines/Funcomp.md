# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3345<sub>(+28) | 3587<sub>(+35) | 3617<sub>(-1) |  |
| 3.0 | 2026-10-20 | 3317<sub>(+508) | 3552<sub>(+357) | 3618<sub>(+354) |  |
| 2.0 | 2026-10-03 | 2809 | 3195 | 3264 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3533<sub>(+53) | 3703<sub>(+50) | 3737<sub>(+29) |  |
| 3.0 | 2026-10-20 | 3480<sub>(+557) | 3653<sub>(+425) | 3708<sub>(+332) |  |
| 2.0 | 2026-10-03 | 2923 | 3228 | 3376 |  |
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

Generated: 2026-11-06 05:38:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2800 --> 3800
  line "E1: STC (8.0+0.08s)" [2809, 3317, 3345]
  line "E1: LTC (60.0+0.60s)" [3195, 3552, 3587]
  line "E1: VLTC (2m24s+1.12s)" [3264, 3618, 3617]
  line "P1: STC (8.0+0.08s)" [2923, 3480, 3533]
  line "P1: LTC (60.0+0.60s)" [3228, 3653, 3703]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3708, 3737]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3737 | 47 | 102 | 50% | 3734 | 85% |
|  |  | E1 | 3617 | 36 | 178 | 49% | 3619 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3703 | 39 | 168 | 52% | 3688 | 69% |
|  |  | E1 | 3587 | 33 | 228 | 52% | 3578 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3533 | 43 | 136 | 50% | 3532 | 67% |
|  |  | E1 | 3345 | 37 | 188 | 51% | 3340 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3708 | 40 | 154 | 57% | 3650 | 75% |
|  |  | E1 | 3618 | 36 | 192 | 53% | 3590 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3653 | 45 | 128 | 57% | 3587 | 69% |
|  |  | E1 | 3552 | 36 | 196 | 55% | 3513 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3480 | 54 | 96 | 57% | 3391 | 61% |
|  |  | E1 | 3317 | 33 | 260 | 54% | 3275 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 40 | 192 | 57% | 3281 | 46% |
|  |  | E1 | 3264 | 34 | 272 | 54% | 3195 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3195 | 35 | 262 | 53% | 3113 | 39% |
|  |  | P1 | 3228 | 40 | 212 | 61% | 3009 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2809 | 34 | 302 | 57% | 2687 | 30% |
|  |  | P1 | 2923 | 45 | 168 | 51% | 2896 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |