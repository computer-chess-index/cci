# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3191<sub>(-3) | 3448<sub>(+46) | 3571<sub>(+149) |  |
| 7.3 | 2024-01-28 | 3194 | 3402 | 3422 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3178<sub>(+469) | 3443<sub>(+60) | 3490<sub>(+239) |  |
| 7.3 | 2024-01-28 | 2709 | 3383 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3241 | 3456 | 3499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Booot+<version>&body=###%20Engine%20name%0ABooot%0A%0A###%20Version%0A7.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:36:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [3194, 3191]
  line "E1: LTC (60.0+0.60s)" [3402, 3448]
  line "E1: VLTC (2m24s+1.12s)" [3422, 3571]
  line "P1: STC (8.0+0.08s)" [2709, 3178]
  line "P1: LTC (60.0+0.60s)" [3383, 3443]
  line "P1: VLTC (2m24s+1.12s)" [3251, 3490]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3490 | 38 | 174 | 54% | 3418 | 78% |
|  |  | E1 | 3571 | 32 | 246 | 53% | 3518 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3443 | 40 | 156 | 52% | 3389 | 76% |
|  |  | E1 | 3448 | 28 | 330 | 55% | 3370 | 72% |
|  |  | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3178 | 33 | 244 | 48% | 3194 | 61% |
|  |  | E1 | 3191 | 27 | 362 | 48% | 3208 | 66% |
|  |  | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3422 | 107 | 30 | 70% | 3139 | 40% |
|  |  | P1 | 3251 | 144 | 16 | 78% | 2979 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3402 | 184 | 10 | 80% | 3100 | 40% |
|  |  | P1 | 3383 | 189 | 12 | 83% | 3011 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2709 | 173 | 8 | 38% | 2808 | 50% |
|  |  | E1 | 3194 | 104 | 28 | 59% | 3121 | 46% |