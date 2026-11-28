# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.11 | 2026-11-24 | 2426<sub>(+689) | 2772<sub>(+855) | 2888<sub>(+872) |  |
| 0.4.0 | 2026-08-28 | 1737<sub>(+136) | 1917<sub>(+124) | 2016<sub>(+220) |  |
| 0.3.10 | 2026-08-22 | 1601 | 1793 | 1796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.11 | 2026-11-24 | 2437<sub>(+701) | 2765<sub>(+866) | 2815<sub>(+847) |  |
| 0.4.0 | 2026-08-28 | 1736<sub>(+173) | 1899<sub>(+255) | 1968<sub>(+168) |  |
| 0.3.10 | 2026-08-22 | 1563 | 1644 | 1800 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1773<sub>(+177) | 1990<sub>(+208) | 2014<sub>(+115) |  |
| 0.3.10 | 2026-08-22 | 1596<sub>(-4) | 1782<sub>(+12) | 1899<sub>(+16) |  |
| 0.3.9 | 2026-08-04 | 1600<sub>(+139) | 1770<sub>(+173) | 1883<sub>(+222) |  |
| 0.3.8 | 2026-08-01 | 1461<sub>(+69) | 1597<sub>(-18) | 1661<sub>(+2) |  |
| 0.3.7 | 2026-07-31 | 1392 | 1615 | 1659 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:36:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.10", "0.4.0", "0.4.11"]
  y-axis "Elo Rating" 1500 --> 2900
  line "E1: STC (8.0+0.08s)" [1601, 1737, 2426]
  line "E1: LTC (60.0+0.60s)" [1793, 1917, 2772]
  line "E1: VLTC (2m24s+1.12s)" [1796, 2016, 2888]
  line "P1: STC (8.0+0.08s)" [1563, 1736, 2437]
  line "P1: LTC (60.0+0.60s)" [1644, 1899, 2765]
  line "P1: VLTC (2m24s+1.12s)" [1800, 1968, 2815]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "T1: STC (8.0+0.08s)" [1392, 1461, 1600, 1596, 1773]
  line "T1: LTC (60.0+0.60s)" [1615, 1597, 1770, 1782, 1990]
  line "T1: VLTC (2m24s+1.12s)" [1659, 1661, 1883, 1899, 2014]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.11 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2888 | 40 | 223 | 59% | 2757 | 33% |
|  |  | P1 | 2815 | 63 | 88 | 57% | 2723 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2772 | 36 | 284 | 56% | 2672 | 26% |
|  |  | P1 | 2765 | 57 | 112 | 55% | 2684 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2437 | 48 | 164 | 59% | 2337 | 23% |
|  |  | E1 | 2426 | 39 | 250 | 55% | 2358 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2014 | 37 | 232 | 48% | 2026 | 33% |
|  |  | P1 | 1968 | 37 | 254 | 53% | 1936 | 20% |
|  |  | E1 | 2016 | 30 | 420 | 49% | 2051 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1990 | 39 | 228 | 52% | 1966 | 22% |
|  |  | P1 | 1899 | 40 | 226 | 50% | 1893 | 23% |
|  |  | E1 | 1917 | 32 | 362 | 49% | 1913 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1736 | 38 | 256 | 51% | 1720 | 20% |
|  |  | E1 | 1737 | 31 | 396 | 47% | 1775 | 22% |
|  |  | T1 | 1773 | 37 | 268 | 49% | 1779 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1796 | 48 | 176 | 49% | 1859 | 17% |
|  |  | T1 | 1899 | 38 | 242 | 50% | 1895 | 25% |
|  |  | P1 | 1800 | 58 | 120 | 49% | 1886 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1793 | 48 | 166 | 42% | 1870 | 20% |
|  |  | T1 | 1782 | 37 | 260 | 51% | 1770 | 20% |
|  |  | P1 | 1644 | 53 | 134 | 40% | 1766 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1596 | 36 | 280 | 46% | 1632 | 23% |
|  |  | P1 | 1563 | 54 | 126 | 43% | 1669 | 25% |
|  |  | E1 | 1601 | 50 | 150 | 35% | 1778 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1883 | 33 | 334 | 55% | 1829 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1770 | 38 | 248 | 50% | 1773 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1600 | 34 | 302 | 51% | 1580 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1661 | 44 | 178 | 52% | 1643 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1597 | 54 | 120 | 50% | 1594 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1461 | 48 | 156 | 53% | 1430 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1659 | 39 | 246 | 47% | 1713 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1615 | 37 | 272 | 47% | 1665 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1392 | 37 | 290 | 43% | 1482 | 18% |