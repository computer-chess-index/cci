# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 1987<sub>(+745) | 2492<sub>(+906) | 2646<sub>(+1039) |  |
| 3.8.51 | 2025-08-10 | 1242 | 1586 | 1607 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2075<sub>(+864) | 2526<sub>(+1067) | 2645<sub>(+986) |  |
| 3.8.51 | 2025-08-10 | 1211 | 1459 | 1659 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2298<sub>(+1041) | 2530<sub>(+1000) | 2654<sub>(+999) |  |
| 3.8.51 | 2025-08-10 | 1257 | 1530 | 1655 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scoria+<version>&body=###%20Engine%20name%0AScoria%0A%0A###%20Version%0A4.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:43:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "E1: STC (8.0+0.08s)" [1242, 1987]
  line "E1: LTC (60.0+0.60s)" [1586, 2492]
  line "E1: VLTC (2m24s+1.12s)" [1607, 2646]
  line "P1: STC (8.0+0.08s)" [1211, 2075]
  line "P1: LTC (60.0+0.60s)" [1459, 2526]
  line "P1: VLTC (2m24s+1.12s)" [1659, 2645]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "T1: STC (8.0+0.08s)" [1257, 2298]
  line "T1: LTC (60.0+0.60s)" [1530, 2530]
  line "T1: VLTC (2m24s+1.12s)" [1655, 2654]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2654 | 30 | 372 | 49% | 2650 | 29% |
|  |  | P1 | 2645 | 37 | 246 | 52% | 2595 | 30% |
|  |  | E1 | 2646 | 33 | 320 | 48% | 2668 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2530 | 32 | 328 | 54% | 2468 | 31% |
|  |  | P1 | 2526 | 34 | 308 | 50% | 2500 | 27% |
|  |  | E1 | 2492 | 33 | 302 | 52% | 2466 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2298 | 34 | 300 | 52% | 2259 | 31% |
|  |  | P1 | 2075 | 37 | 258 | 53% | 2051 | 27% |
|  |  | E1 | 1987 | 33 | 358 | 50% | 1998 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1607 | 49 | 140 | 41% | 1779 | 40% |
|  |  | T1 | 1655 | 24 | 554 | 45% | 1724 | 42% |
|  |  | P1 | 1659 | 58 | 102 | 42% | 1823 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1586 | 49 | 144 | 46% | 1735 | 36% |
|  |  | T1 | 1530 | 26 | 498 | 49% | 1566 | 38% |
|  |  | P1 | 1459 | 52 | 128 | 43% | 1619 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1257 | 25 | 576 | 54% | 1196 | 34% |
|  |  | P1 | 1211 | 54 | 138 | 35% | 1442 | 27% |
|  |  | E1 | 1242 | 52 | 144 | 39% | 1467 | 26% |