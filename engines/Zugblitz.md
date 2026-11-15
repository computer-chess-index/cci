# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1635<sub>(+104) | 1821<sub>(-235) | 1878<sub>(-117) |  |
| 1.3.1 | 2026-01-10 | 1531 | 2056 | 1995 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1581<sub>(+88) | 1755<sub>(-109) | 1945<sub>(-62) |  |
| 1.3.1 | 2026-01-10 | 1493 | 1864 | 2007 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1863<sub>(-1) | 2107<sub>(-45) | 2217<sub>(+26) |  |
| 1.3.1 | 2026-01-10 | 1864 | 2152 | 2191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zugblitz+<version>&body=###%20Engine%20name%0AZugblitz%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:44:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1400 --> 2100
  line "E1: STC (8.0+0.08s)" [1531, 1635]
  line "E1: LTC (60.0+0.60s)" [2056, 1821]
  line "E1: VLTC (2m24s+1.12s)" [1995, 1878]
  line "P1: STC (8.0+0.08s)" [1493, 1581]
  line "P1: LTC (60.0+0.60s)" [1864, 1755]
  line "P1: VLTC (2m24s+1.12s)" [2007, 1945]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1800 --> 2300
  line "T1: STC (8.0+0.08s)" [1864, 1863]
  line "T1: LTC (60.0+0.60s)" [2152, 2107]
  line "T1: VLTC (2m24s+1.12s)" [2191, 2217]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2217 | 29 | 376 | 50% | 2222 | 35% |
|  |  | P1 | 1945 | 36 | 286 | 48% | 1978 | 21% |
|  |  | E1 | 1878 | 29 | 462 | 55% | 1827 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2107 | 29 | 404 | 53% | 2080 | 32% |
|  |  | P1 | 1755 | 31 | 410 | 41% | 1858 | 22% |
|  |  | E1 | 1821 | 32 | 350 | 50% | 1833 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1863 | 29 | 410 | 53% | 1827 | 28% |
|  |  | P1 | 1581 | 32 | 362 | 48% | 1601 | 19% |
|  |  | E1 | 1635 | 28 | 456 | 45% | 1686 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1995 | 66 | 92 | 47% | 2048 | 23% |
|  |  | T1 | 2191 | 27 | 456 | 49% | 2201 | 35% |
|  |  | P1 | 2007 | 70 | 74 | 56% | 1949 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2056 | 63 | 90 | 42% | 2179 | 28% |
|  |  | T1 | 2152 | 28 | 422 | 49% | 2157 | 28% |
|  |  | P1 | 1864 | 71 | 80 | 29% | 2120 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1531 | 61 | 126 | 39% | 1746 | 14% |
|  |  | T1 | 1864 | 24 | 614 | 51% | 1843 | 27% |
|  |  | P1 | 1493 | 76 | 84 | 33% | 1786 | 12% |