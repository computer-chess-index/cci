# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3295<sub>(+124) | 3497<sub>(+40) | 3584<sub>(+81) |  |
| 0.3 | 2026-10-06 | 3171<sub>(+61) | 3457<sub>(+73) | 3503<sub>(+97) |  |
| 0.2 | 2026-09-15 | 3110 | 3384 | 3406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3455<sub>(+153) | 3646<sub>(+81) | 3673<sub>(+36) |  |
| 0.3 | 2026-10-06 | 3302<sub>(+62) | 3565<sub>(+137) | 3637<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3240 | 3428 | 3502 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3240 | 3428 | 3502 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+StockDory+<version>&body=###%20Engine%20name%0AStockDory%0A%0A###%20Version%0A0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:42:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3110, 3171, 3295]
  line "E1: LTC (60.0+0.60s)" [3384, 3457, 3497]
  line "E1: VLTC (2m24s+1.12s)" [3406, 3503, 3584]
  line "P1: STC (8.0+0.08s)" [3240, 3302, 3455]
  line "P1: LTC (60.0+0.60s)" [3428, 3565, 3646]
  line "P1: VLTC (2m24s+1.12s)" [3502, 3637, 3673]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3673 | 42 | 140 | 49% | 3680 | 71% |
|  |  | E1 | 3584 | 34 | 212 | 52% | 3575 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3646 | 45 | 116 | 52% | 3636 | 81% |
|  |  | E1 | 3497 | 32 | 236 | 51% | 3490 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3455 | 35 | 212 | 52% | 3440 | 64% |
|  |  | E1 | 3295 | 33 | 234 | 53% | 3275 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3503 | 29 | 327 | 57% | 3413 | 66% |
|  |  | P1 | 3637 | 35 | 216 | 53% | 3552 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3457 | 29 | 328 | 56% | 3384 | 61% |
|  |  | P1 | 3565 | 32 | 264 | 54% | 3507 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3302 | 42 | 170 | 56% | 3190 | 48% |
|  |  | E1 | 3171 | 30 | 330 | 55% | 3109 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3502 | 69 | 56 | 43% | 3556 | 57% |
|  |  | E1 | 3406 | 40 | 158 | 53% | 3389 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3428 | 60 | 72 | 42% | 3484 | 68% |
|  |  | E1 | 3384 | 44 | 134 | 43% | 3434 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3240 | 91 | 36 | 47% | 3267 | 39% |
|  |  | E1 | 3110 | 45 | 146 | 54% | 3071 | 46% |