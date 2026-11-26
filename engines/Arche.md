# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.11 | 2026-11-24 | 2434<sub>(+697) | 2755<sub>(+841) | 2897<sub>(+879) |  |
| 0.4.0 | 2026-08-28 | 1737<sub>(+136) | 1914<sub>(+123) | 2018<sub>(+222) |  |
| 0.3.10 | 2026-08-22 | 1601 | 1791 | 1796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.11 | 2026-11-24 | 2323<sub>(+587) | 2770<sub>(+875) | 2822<sub>(+858) |  |
| 0.4.0 | 2026-08-28 | 1736<sub>(+173) | 1895<sub>(+252) | 1964<sub>(+164) |  |
| 0.3.10 | 2026-08-22 | 1563 | 1643 | 1800 |  |
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

Generated: 2026-11-26 05:36:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.10", "0.4.0", "0.4.11"]
  y-axis "Elo Rating" 1500 --> 2900
  line "E1: STC (8.0+0.08s)" [1601, 1737, 2434]
  line "E1: LTC (60.0+0.60s)" [1791, 1914, 2755]
  line "E1: VLTC (2m24s+1.12s)" [1796, 2018, 2897]
  line "P1: STC (8.0+0.08s)" [1563, 1736, 2323]
  line "P1: LTC (60.0+0.60s)" [1643, 1895, 2770]
  line "P1: VLTC (2m24s+1.12s)" [1800, 1964, 2822]
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
| 0.4.11 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2822 | 64 | 84 | 58% | 2719 | 30% |
|  |  | E1 | 2897 | 50 | 151 | 66% | 2689 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2770 | 60 | 100 | 57% | 2674 | 25% |
|  |  | E1 | 2755 | 40 | 228 | 56% | 2649 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2323 | 109 | 36 | 71% | 2109 | 19% |
|  |  | E1 | 2434 | 41 | 234 | 56% | 2354 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2014 | 37 | 232 | 48% | 2026 | 33% |
|  |  | P1 | 1964 | 37 | 254 | 53% | 1932 | 20% |
|  |  | E1 | 2018 | 30 | 416 | 49% | 2051 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1990 | 39 | 228 | 52% | 1966 | 22% |
|  |  | P1 | 1895 | 40 | 226 | 50% | 1890 | 23% |
|  |  | E1 | 1914 | 32 | 358 | 49% | 1912 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1773 | 37 | 268 | 49% | 1779 | 18% |
|  |  | P1 | 1736 | 38 | 256 | 51% | 1720 | 20% |
|  |  | E1 | 1737 | 31 | 396 | 47% | 1775 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1899 | 38 | 242 | 50% | 1895 | 25% |
|  |  | P1 | 1800 | 58 | 120 | 49% | 1886 | 18% |
|  |  | E1 | 1796 | 48 | 176 | 49% | 1859 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1782 | 37 | 260 | 51% | 1770 | 20% |
|  |  | P1 | 1643 | 53 | 134 | 40% | 1764 | 24% |
|  |  | E1 | 1791 | 48 | 166 | 42% | 1868 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1596 | 36 | 280 | 46% | 1632 | 23% |
|  |  | P1 | 1563 | 54 | 126 | 43% | 1669 | 25% |
|  |  | E1 | 1601 | 50 | 150 | 35% | 1777 | 28% |
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