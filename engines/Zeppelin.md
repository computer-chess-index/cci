# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1908<sub>(+114) | 2183<sub>(+122) | 2263<sub>(+48) |  |
| 1.4.2 | 2026-03-22 | 1794<sub>(+12) | 2061<sub>(-63) | 2215<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1782<sub>(+4) | 2124<sub>(+110) | 2174<sub>(+6) |  |
| 1.4.0 | 2026-03-14 | 1778<sub>(+154) | 2014<sub>(+100) | 2168<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1624<sub>(+59) | 1914<sub>(+128) | 1990<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1565<sub>(+66) | 1786<sub>(+100) | 1933<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1499<sub>(+323) | 1686<sub>(+116) | 1813<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1176<sub>(-31) | 1570<sub>(+150) | 1628<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1207 | 1420 | 1517 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeppelin+<version>&body=###%20Engine%20name%0AZeppelin%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-03 04:40:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "" [1207, 1176, 1499, 1565, 1624, 1778, 1782, 1794, 1908]
  line "STC (8.0+0.08s)" [1207, 1176, 1499, 1565, 1624, 1778, 1782, 1794, 1908]
  line "LTC (60.0+0.60s)" [1420, 1570, 1686, 1786, 1914, 2014, 2124, 2061, 2183]
  line "" [1517, 1628, 1813, 1933, 1990, 2168, 2174, 2215, 2263]
  line "VLTC (2m24s+1.12s)" [1517, 1628, 1813, 1933, 1990, 2168, 2174, 2215, 2263]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2263 | 26 | 494 | 51% | 2255 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2183 | 26 | 506 | 52% | 2164 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 25 | 598 | 49% | 1909 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2215 | 36 | 278 | 54% | 2174 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2061 | 36 | 280 | 45% | 2113 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1794 | 41 | 208 | 52% | 1774 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2174 | 32 | 340 | 50% | 2179 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2124 | 39 | 230 | 54% | 2090 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1782 | 41 | 216 | 53% | 1752 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2168 | 36 | 272 | 48% | 2190 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2014 | 40 | 218 | 52% | 1998 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1778 | 41 | 206 | 51% | 1770 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1990 | 39 | 224 | 50% | 1990 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1914 | 39 | 232 | 49% | 1928 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1624 | 44 | 182 | 49% | 1629 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1933 | 38 | 254 | 46% | 1972 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1786 | 41 | 216 | 50% | 1782 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1565 | 43 | 198 | 49% | 1570 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1813 | 38 | 258 | 55% | 1756 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1686 | 45 | 178 | 47% | 1717 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1499 | 48 | 160 | 53% | 1469 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1628 | 48 | 162 | 51% | 1615 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1570 | 46 | 178 | 46% | 1609 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1176 | 65 | 80 | 47% | 1204 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1517 | 37 | 290 | 42% | 1648 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1420 | 43 | 218 | 48% | 1457 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1207 | 118 | 30 | 33% | 1409 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |