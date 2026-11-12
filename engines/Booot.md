# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3251<sub>(+524) | 3510<sub>(+882) | 3629<sub>(+760) |  |
| 7.3 | 2024-01-28 | 2727 | 2628 | 2869 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3384<sub>(+new) | 3646<sub>(+569) | 3695<sub>(+810) |  |
| 7.3 | 2024-01-28 |  | 3077 | 2885 |  |
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

Generated: 2026-11-12 05:36:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 2600 --> 3700
  line "E1: STC (8.0+0.08s)" [2727, 3251]
  line "E1: LTC (60.0+0.60s)" [2628, 3510]
  line "E1: VLTC (2m24s+1.12s)" [2869, 3629]
  line "P1: STC (8.0+0.08s)" [3384]
  line "P1: LTC (60.0+0.60s)" [3646]
  line "P1: VLTC (2m24s+1.12s)" [3695]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3695 | 38 | 174 | 54% | 3621 | 78% |
|  |  | E1 | 3629 | 32 | 246 | 53% | 3576 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3646 | 40 | 156 | 52% | 3591 | 76% |
|  |  | E1 | 3510 | 28 | 326 | 56% | 3428 | 72% |
|  |  | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3384 | 33 | 240 | 48% | 3398 | 62% |
|  |  | E1 | 3251 | 27 | 356 | 48% | 3266 | 66% |
|  |  | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2869 | 257 | 4 | 88% | 2618 | 25% |
|  |  | P1 | 2885 | 230 | 4 | 88% | 2685 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3077 | 294 | 4 | 100% | 2709 | 0% |
|  |  | E1 | 2628 | 294 | 4 | 100% | 2263 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2727 | 175 | 10 | 60% | 2606 | 20% |