# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1733<sub>(+120) | 1917<sub>(+120) | 2014<sub>(+244) |  |
| 0.3.10 | 2026-08-22 | 1613 | 1797 | 1770 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1725<sub>(+174) | 1890<sub>(+259) | 1956<sub>(+167) |  |
| 0.3.10 | 2026-08-22 | 1551 | 1631 | 1789 |  |
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

Generated: 2026-11-22 05:35:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1613, 1733]
  line "E1: LTC (60.0+0.60s)" [1797, 1917]
  line "E1: VLTC (2m24s+1.12s)" [1770, 2014]
  line "P1: STC (8.0+0.08s)" [1551, 1725]
  line "P1: LTC (60.0+0.60s)" [1631, 1890]
  line "P1: VLTC (2m24s+1.12s)" [1789, 1956]
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
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1956 | 37 | 254 | 53% | 1924 | 20% |
|  |  | E1 | 2014 | 30 | 412 | 49% | 2048 | 22% |
|  |  | T1 | 2014 | 37 | 232 | 48% | 2026 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1890 | 40 | 220 | 50% | 1879 | 22% |
|  |  | E1 | 1917 | 32 | 350 | 50% | 1906 | 23% |
|  |  | T1 | 1990 | 39 | 228 | 52% | 1966 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1725 | 39 | 244 | 51% | 1709 | 19% |
|  |  | E1 | 1733 | 31 | 388 | 47% | 1774 | 22% |
|  |  | T1 | 1773 | 37 | 268 | 49% | 1779 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1899 | 38 | 242 | 50% | 1895 | 25% |
|  |  | P1 | 1789 | 58 | 120 | 49% | 1871 | 18% |
|  |  | E1 | 1770 | 52 | 152 | 47% | 1867 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1782 | 37 | 260 | 51% | 1770 | 20% |
|  |  | P1 | 1631 | 55 | 126 | 38% | 1763 | 23% |
|  |  | E1 | 1797 | 55 | 130 | 41% | 1883 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1596 | 36 | 280 | 46% | 1632 | 23% |
|  |  | P1 | 1551 | 54 | 122 | 42% | 1663 | 25% |
|  |  | E1 | 1613 | 53 | 134 | 35% | 1794 | 30% |
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