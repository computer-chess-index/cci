# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1651<sub>(+159) | 1844<sub>(-359) | 1899<sub>(-140) |  |
| 1.3.1 | 2026-01-10 | 1492 | 2203 | 2039 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1593<sub>(+117) | 1770<sub>(-287) | 1949<sub>(-57) |  |
| 1.3.1 | 2026-01-10 | 1476 | 2057 | 2006 |  |
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

Generated: 2026-11-13 05:44:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1400 --> 2300
  line "E1: STC (8.0+0.08s)" [1492, 1651]
  line "E1: LTC (60.0+0.60s)" [2203, 1844]
  line "E1: VLTC (2m24s+1.12s)" [2039, 1899]
  line "P1: STC (8.0+0.08s)" [1476, 1593]
  line "P1: LTC (60.0+0.60s)" [2057, 1770]
  line "P1: VLTC (2m24s+1.12s)" [2006, 1949]
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
|  |  | P1 | 1949 | 36 | 278 | 48% | 1990 | 21% |
|  |  | E1 | 1899 | 29 | 454 | 55% | 1841 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2107 | 29 | 404 | 53% | 2080 | 32% |
|  |  | P1 | 1770 | 30 | 406 | 42% | 1874 | 22% |
|  |  | E1 | 1844 | 33 | 326 | 51% | 1852 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1863 | 29 | 410 | 53% | 1827 | 28% |
|  |  | P1 | 1593 | 32 | 358 | 48% | 1609 | 19% |
|  |  | E1 | 1651 | 29 | 444 | 44% | 1706 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2006 | 135 | 26 | 52% | 1967 | 19% |
|  |  | E1 | 2039 | 100 | 42 | 45% | 2161 | 29% |
|  |  | T1 | 2191 | 27 | 456 | 49% | 2201 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2203 | 120 | 28 | 36% | 2431 | 14% |
|  |  | T1 | 2152 | 28 | 422 | 49% | 2157 | 28% |
|  |  | P1 | 2057 | 119 | 28 | 27% | 2321 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1492 | 106 | 58 | 18% | 2040 | 16% |
|  |  | T1 | 1864 | 24 | 614 | 51% | 1843 | 27% |
|  |  | P1 | 1476 | 135 | 40 | 11% | 2066 | 8% |