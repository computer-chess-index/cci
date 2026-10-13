# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 608 | 606 | 579 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 536 | 583 | 500 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 589<sub>(+166) | 586<sub>(+146) | 581<sub>(+131) |  |
| 0.2 | 2026-08-07 | 423 | 440 | 450 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Magpie+<version>&body=###%20Engine%20name%0AMagpie%0A%0A###%20Version%0A0.3" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:40:27

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 600
  line "T1: STC (8.0+0.08s)" [423, 589]
  line "T1: LTC (60.0+0.60s)" [440, 586]
  line "T1: VLTC (2m24s+1.12s)" [450, 581]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 579 | 54 | 132 | 56% | 547 | 23% |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 581 | 43 | 208 | 50% | 587 | 22% |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 500 | 66 | 106 | 39% | 855 | 22% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 606 | 51 | 136 | 58% | 522 | 32% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 586 | 44 | 204 | 50% | 576 | 25% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 583 | 62 | 96 | 53% | 684 | 32% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 589 | 44 | 220 | 47% | 648 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 536 | 65 | 88 | 47% | 709 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 608 | 53 | 140 | 55% | 562 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 450 | 45 | 208 | 35% | 687 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 440 | 46 | 192 | 36% | 645 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 423 | 46 | 188 | 37% | 598 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |