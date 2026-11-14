# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1651<sub>(+181) | 1839<sub>(-278) | 1893<sub>(-119) |  |
| 1.3.1 | 2026-01-10 | 1470 | 2117 | 2012 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1581<sub>(+46) | 1755<sub>(-234) | 1940<sub>(+3) |  |
| 1.3.1 | 2026-01-10 | 1535 | 1989 | 1937 |  |
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

Generated: 2026-11-14 05:44:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1400 --> 2200
  line "E1: STC (8.0+0.08s)" [1470, 1651]
  line "E1: LTC (60.0+0.60s)" [2117, 1839]
  line "E1: VLTC (2m24s+1.12s)" [2012, 1893]
  line "P1: STC (8.0+0.08s)" [1535, 1581]
  line "P1: LTC (60.0+0.60s)" [1989, 1755]
  line "P1: VLTC (2m24s+1.12s)" [1937, 1940]
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
|  |  | P1 | 1940 | 37 | 278 | 48% | 1979 | 21% |
|  |  | E1 | 1893 | 29 | 458 | 55% | 1839 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2107 | 29 | 404 | 53% | 2080 | 32% |
|  |  | P1 | 1755 | 30 | 410 | 41% | 1859 | 22% |
|  |  | E1 | 1839 | 33 | 334 | 51% | 1848 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1863 | 29 | 410 | 53% | 1827 | 28% |
|  |  | P1 | 1581 | 32 | 362 | 48% | 1602 | 19% |
|  |  | E1 | 1651 | 28 | 448 | 45% | 1701 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2191 | 27 | 456 | 49% | 2201 | 35% |
|  |  | P1 | 1937 | 89 | 50 | 50% | 1940 | 24% |
|  |  | E1 | 2012 | 74 | 74 | 47% | 2079 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1989 | 87 | 52 | 32% | 2214 | 25% |
|  |  | E1 | 2117 | 85 | 52 | 38% | 2292 | 23% |
|  |  | T1 | 2152 | 28 | 422 | 49% | 2157 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1535 | 96 | 58 | 29% | 1899 | 10% |
|  |  | E1 | 1470 | 78 | 90 | 27% | 1864 | 12% |
|  |  | T1 | 1864 | 24 | 614 | 51% | 1843 | 27% |