# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1671 | 1839 | 1976 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1831 | 2030 | 2032 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-09 14:08:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "" [1392, 1461, 1600, 1596, 1773]
  line "STC (8.0+0.08s)" [1392, 1461, 1600, 1596, 1773]
  line "LTC (60.0+0.60s)" [1615, 1597, 1770, 1782, 1990]
  line "" [1659, 1661, 1883, 1899, 2014]
  line "VLTC (2m24s+1.12s)" [1659, 1661, 1883, 1899, 2014]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2014 | 37 | 232 | 48% | 2026 | 33% |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2032 | 47 | 158 | 49% | 2043 | 20% |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1976 | 36 | 280 | 50% | 2012 | 21% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1990 | 39 | 228 | 52% | 1966 | 22% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2030 | 51 | 138 | 50% | 2025 | 21% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1839 | 41 | 212 | 49% | 1840 | 24% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1831 | 51 | 136 | 48% | 1850 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1671 | 42 | 208 | 47% | 1727 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1773 | 37 | 268 | 49% | 1779 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1899 | 38 | 242 | 50% | 1895 | 25% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1782 | 37 | 260 | 51% | 1770 | 20% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1596 | 36 | 280 | 46% | 1632 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1883 | 33 | 334 | 55% | 1829 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1770 | 38 | 248 | 50% | 1773 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1600 | 34 | 302 | 51% | 1580 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1661 | 44 | 178 | 52% | 1643 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1597 | 54 | 120 | 50% | 1594 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1461 | 48 | 156 | 53% | 1430 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1659 | 39 | 246 | 47% | 1713 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1615 | 37 | 272 | 47% | 1665 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1392 | 37 | 290 | 43% | 1482 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |