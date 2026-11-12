# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3507<sub>(+513) | 3708<sub>(+810) | 3741<sub>(+924) |  |
| 7.0 | 2025-02-14 | 2994 | 2898 | 2817 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3645<sub>(+660) | 3787<sub>(+new) | 3812<sub>(+972) |  |
| 7.0 | 2025-02-14 | 2985 |  | 2840 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3475<sub>(+95) | 3592<sub>(+60) | 3578<sub>(+26) |  |
| 7.0 | 2025-02-14 | 3380 | 3532 | 3552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Integral+<version>&body=###%20Engine%20name%0AIntegral%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:38:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 2800 --> 3900
  line "E1: STC (8.0+0.08s)" [2994, 3507]
  line "E1: LTC (60.0+0.60s)" [2898, 3708]
  line "E1: VLTC (2m24s+1.12s)" [2817, 3741]
  line "P1: STC (8.0+0.08s)" [3645]
  line "P1: LTC (60.0+0.60s)" [3787]
  line "P1: VLTC (2m24s+1.12s)" [3812]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3380, 3475]
  line "T1: LTC (60.0+0.60s)" [3532, 3592]
  line "T1: VLTC (2m24s+1.12s)" [3552, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3741 | 26 | 336 | 51% | 3733 | 90% |
|  |  | T1 | 3578 | 34 | 190 | 51% | 3573 | 95% |
|  |  | P1 | 3812 | 36 | 178 | 51% | 3807 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3708 | 32 | 224 | 50% | 3707 | 88% |
|  |  | T1 | 3592 | 39 | 148 | 51% | 3583 | 91% |
|  |  | P1 | 3787 | 37 | 164 | 50% | 3788 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3507 | 26 | 370 | 46% | 3536 | 72% |
|  |  | T1 | 3475 | 27 | 316 | 52% | 3463 | 82% |
|  |  | P1 | 3645 | 31 | 250 | 47% | 3664 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2840 | 190 | 4 | 50% | 2840 | 100% |
|  |  | T1 | 3552 | 15 | 1010 | 50% | 3552 | 87% |
|  |  | E1 | 2817 | 246 | 8 | 100% | 2373 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3532 | 15 | 1012 | 50% | 3530 | 85% |
|  |  | E1 | 2898 | 147 | 8 | 50% | 2898 | 100% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3380 | 15 | 1158 | 50% | 3378 | 70% |
|  |  | E1 | 2994 | 222 | 4 | 25% | 3135 | 50% |
|  |  | P1 | 2985 | 262 | 4 | 100% | 2670 | 0% |