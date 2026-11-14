# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 706<sub>(+82) | 691<sub>(+201) | 687<sub>(+106) |  |
| 0.2 | 2026-08-07 | 624 | 490 | 581 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 594<sub>(+159) | 612<sub>(+80) | 563<sub>(+57) |  |
| 0.2 | 2026-08-07 | 435 | 532 | 506 |  |
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

Generated: 2026-11-14 05:39:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 800
  line "E1: STC (8.0+0.08s)" [624, 706]
  line "E1: LTC (60.0+0.60s)" [490, 691]
  line "E1: VLTC (2m24s+1.12s)" [581, 687]
  line "P1: STC (8.0+0.08s)" [435, 594]
  line "P1: LTC (60.0+0.60s)" [532, 612]
  line "P1: VLTC (2m24s+1.12s)" [506, 563]
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
|  |  | P1 | 563 | 55 | 160 | 38% | 1054 | 23% |
|  |  | E1 | 687 | 44 | 234 | 46% | 860 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 586 | 44 | 204 | 50% | 576 | 25% |
|  |  | P1 | 612 | 55 | 128 | 49% | 772 | 27% |
|  |  | E1 | 691 | 43 | 220 | 46% | 799 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 589 | 44 | 220 | 47% | 648 | 16% |
|  |  | P1 | 594 | 56 | 128 | 45% | 864 | 21% |
|  |  | E1 | 706 | 42 | 236 | 45% | 798 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 506 | 112 | 60 | 13% | 1499 | 18% |
|  |  | E1 | 581 | 89 | 72 | 17% | 1359 | 26% |
|  |  | T1 | 450 | 45 | 208 | 35% | 687 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 532 | 106 | 56 | 18% | 1230 | 18% |
|  |  | E1 | 490 | 86 | 64 | 26% | 1065 | 30% |
|  |  | T1 | 440 | 46 | 192 | 36% | 645 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 435 | 100 | 52 | 22% | 1072 | 25% |
|  |  | E1 | 624 | 96 | 62 | 15% | 1377 | 27% |
|  |  | T1 | 423 | 46 | 188 | 37% | 598 | 35% |