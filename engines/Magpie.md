# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 707<sub>(-307) | 695<sub>(+275) | 687<sub>(-168) |  |
| 0.2 | 2026-08-07 | 1014 | 420 | 855 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 586<sub>(-899) | 617<sub>(-744) | 551<sub>(-952) |  |
| 0.2 | 2026-08-07 | 1485 | 1361 | 1503 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-12 05:39:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 1600
  line "E1: STC (8.0+0.08s)" [1014, 707]
  line "E1: LTC (60.0+0.60s)" [420, 695]
  line "E1: VLTC (2m24s+1.12s)" [855, 687]
  line "P1: STC (8.0+0.08s)" [1485, 586]
  line "P1: LTC (60.0+0.60s)" [1361, 617]
  line "P1: VLTC (2m24s+1.12s)" [1503, 551]
```



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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 581 | 43 | 208 | 50% | 587 | 22% |
|  |  | P1 | 551 | 58 | 152 | 37% | 1119 | 20% |
|  |  | E1 | 687 | 44 | 230 | 46% | 871 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 586 | 44 | 204 | 50% | 576 | 25% |
|  |  | P1 | 617 | 56 | 124 | 50% | 798 | 27% |
|  |  | E1 | 695 | 43 | 220 | 46% | 803 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 589 | 44 | 220 | 47% | 648 | 16% |
|  |  | P1 | 586 | 58 | 124 | 44% | 899 | 20% |
|  |  | E1 | 707 | 44 | 224 | 44% | 811 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1503 | 252 | 24 | 0% | 2387 | 0% |
|  |  | E1 | 855 | 168 | 40 | 4% | 1858 | 8% |
|  |  | T1 | 450 | 45 | 208 | 35% | 687 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1361 | 266 | 20 | 0% | 2140 | 0% |
|  |  | E1 | 420 | 189 | 36 | 3% | 1513 | 6% |
|  |  | T1 | 440 | 46 | 192 | 36% | 645 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1014 | 270 | 30 | 0% | 2068 | 0% |
|  |  | T1 | 423 | 46 | 188 | 37% | 598 | 35% |
|  |  | P1 | 1485 | 235 | 16 | 3% | 2195 | 6% |