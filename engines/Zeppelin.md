# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1912<sub>(+114) | 2184<sub>(+117) | 2261<sub>(+42) |  |
| 1.4.2 | 2026-03-22 | 1798<sub>(+12) | 2067<sub>(-62) | 2219<sub>(+40) |  |
| 1.4.1 | 2026-03-15 | 1786<sub>(+4) | 2129<sub>(+111) | 2179<sub>(+7) |  |
| 1.4.0 | 2026-03-14 | 1782<sub>(+154) | 2018<sub>(+100) | 2172<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1628<sub>(+59) | 1918<sub>(+128) | 1994<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1569<sub>(+68) | 1790<sub>(+100) | 1937<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1501<sub>(+322) | 1690<sub>(+116) | 1817<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1179<sub>(-29) | 1574<sub>(+151) | 1632<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1208 | 1423 | 1521 |  |
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

Generated: 2026-09-24 04:44:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "" [1208, 1179, 1501, 1569, 1628, 1782, 1786, 1798, 1912]
  line "STC (8.0+0.08s)" [1208, 1179, 1501, 1569, 1628, 1782, 1786, 1798, 1912]
  line "LTC (60.0+0.60s)" [1423, 1574, 1690, 1790, 1918, 2018, 2129, 2067, 2184]
  line "" [1521, 1632, 1817, 1937, 1994, 2172, 2179, 2219, 2261]
  line "VLTC (2m24s+1.12s)" [1521, 1632, 1817, 1937, 1994, 2172, 2179, 2219, 2261]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 26 | 502 | 50% | 2259 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2184 | 26 | 514 | 51% | 2169 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1912 | 24 | 620 | 49% | 1913 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2219 | 36 | 278 | 54% | 2178 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 36 | 280 | 45% | 2117 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1798 | 41 | 208 | 52% | 1777 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2179 | 32 | 340 | 50% | 2183 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2129 | 39 | 230 | 54% | 2095 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1786 | 41 | 216 | 53% | 1756 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2172 | 36 | 272 | 48% | 2195 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2018 | 40 | 218 | 52% | 2002 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1782 | 41 | 206 | 51% | 1774 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1994 | 39 | 224 | 50% | 1995 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1918 | 39 | 232 | 49% | 1932 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1628 | 44 | 182 | 49% | 1634 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1937 | 38 | 254 | 46% | 1976 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1790 | 41 | 216 | 50% | 1786 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1569 | 43 | 198 | 49% | 1574 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1817 | 38 | 258 | 55% | 1759 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1690 | 45 | 178 | 47% | 1721 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1501 | 48 | 160 | 53% | 1472 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1632 | 48 | 162 | 51% | 1619 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1574 | 46 | 178 | 46% | 1613 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1179 | 65 | 80 | 47% | 1207 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1521 | 37 | 290 | 42% | 1654 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1423 | 43 | 218 | 48% | 1459 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1208 | 118 | 30 | 33% | 1412 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |