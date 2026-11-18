# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 1993<sub>(+732) | 2483<sub>(+903) | 2649<sub>(+1021) |  |
| 3.8.51 | 2025-08-10 | 1261 | 1580 | 1628 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2059<sub>(+840) | 2511<sub>(+1056) | 2628<sub>(+1004) |  |
| 3.8.51 | 2025-08-10 | 1219 | 1455 | 1624 |  |
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

Generated: 2026-11-18 05:43:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "E1: STC (8.0+0.08s)" [1261, 1993]
  line "E1: LTC (60.0+0.60s)" [1580, 2483]
  line "E1: VLTC (2m24s+1.12s)" [1628, 2649]
  line "P1: STC (8.0+0.08s)" [1219, 2059]
  line "P1: LTC (60.0+0.60s)" [1455, 2511]
  line "P1: VLTC (2m24s+1.12s)" [1624, 2628]
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
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2628 | 39 | 230 | 54% | 2565 | 30% |
|  |  | E1 | 2649 | 34 | 296 | 48% | 2666 | 31% |
|  |  | T1 | 2654 | 30 | 372 | 49% | 2650 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2511 | 38 | 248 | 51% | 2471 | 27% |
|  |  | E1 | 2483 | 36 | 258 | 52% | 2460 | 32% |
|  |  | T1 | 2530 | 32 | 328 | 54% | 2468 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2059 | 40 | 222 | 54% | 2007 | 27% |
|  |  | E1 | 1993 | 34 | 330 | 50% | 1997 | 21% |
|  |  | T1 | 2298 | 34 | 300 | 52% | 2259 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1655 | 24 | 554 | 45% | 1724 | 42% |
|  |  | P1 | 1624 | 66 | 82 | 37% | 1851 | 37% |
|  |  | E1 | 1628 | 53 | 120 | 42% | 1806 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1530 | 26 | 498 | 49% | 1566 | 38% |
|  |  | P1 | 1455 | 63 | 92 | 40% | 1679 | 32% |
|  |  | E1 | 1580 | 52 | 128 | 45% | 1754 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1257 | 25 | 576 | 54% | 1196 | 34% |
|  |  | P1 | 1219 | 64 | 104 | 31% | 1512 | 23% |
|  |  | E1 | 1261 | 57 | 124 | 38% | 1511 | 25% |