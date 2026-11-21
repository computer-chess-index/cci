# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 1991<sub>(+734) | 2483<sub>(+909) | 2647<sub>(+1023) |  |
| 3.8.51 | 2025-08-10 | 1257 | 1574 | 1624 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2068<sub>(+857) | 2510<sub>(+1065) | 2628<sub>(+1003) |  |
| 3.8.51 | 2025-08-10 | 1211 | 1445 | 1625 |  |
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

Generated: 2026-11-21 05:42:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "E1: STC (8.0+0.08s)" [1257, 1991]
  line "E1: LTC (60.0+0.60s)" [1574, 2483]
  line "E1: VLTC (2m24s+1.12s)" [1624, 2647]
  line "P1: STC (8.0+0.08s)" [1211, 2068]
  line "P1: LTC (60.0+0.60s)" [1445, 2510]
  line "P1: VLTC (2m24s+1.12s)" [1625, 2628]
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
|  |  | P1 | 2628 | 37 | 246 | 52% | 2580 | 30% |
|  |  | E1 | 2647 | 33 | 308 | 48% | 2666 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2530 | 32 | 328 | 54% | 2468 | 31% |
|  |  | P1 | 2510 | 37 | 268 | 50% | 2481 | 27% |
|  |  | E1 | 2483 | 35 | 270 | 52% | 2461 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2068 | 39 | 238 | 53% | 2037 | 26% |
|  |  | E1 | 1991 | 34 | 338 | 51% | 1991 | 20% |
|  |  | T1 | 2298 | 34 | 300 | 52% | 2259 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1624 | 53 | 120 | 42% | 1804 | 38% |
|  |  | T1 | 1655 | 24 | 554 | 45% | 1724 | 42% |
|  |  | P1 | 1625 | 66 | 82 | 37% | 1856 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1530 | 26 | 498 | 49% | 1566 | 38% |
|  |  | P1 | 1445 | 56 | 112 | 41% | 1635 | 36% |
|  |  | E1 | 1574 | 52 | 128 | 45% | 1751 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1257 | 25 | 576 | 54% | 1196 | 34% |
|  |  | P1 | 1211 | 56 | 126 | 34% | 1458 | 27% |
|  |  | E1 | 1257 | 57 | 124 | 38% | 1508 | 25% |