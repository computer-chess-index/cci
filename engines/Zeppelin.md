# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1906<sub>(+116) | 2174<sub>(+119) | 2261<sub>(+52) |  |
| 1.4.2 | 2026-03-22 | 1790<sub>(+12) | 2055<sub>(-62) | 2209<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1778<sub>(+5) | 2117<sub>(+108) | 2167<sub>(+6) |  |
| 1.4.0 | 2026-03-14 | 1773<sub>(+153) | 2009<sub>(+99) | 2161<sub>(+175) |  |
| 1.3.0 | 2026-03-05 | 1620<sub>(+59) | 1910<sub>(+129) | 1986<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1561<sub>(+68) | 1781<sub>(+99) | 1929<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1493<sub>(+324) | 1682<sub>(+117) | 1809<sub>(+186) |  |
| 1.0.0 | 2026-02-01 | 1169<sub>(-33) | 1565<sub>(+149) | 1623<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1202<sub>(+new) | 1416<sub>(+new) | 1512<sub>(+new) |  |
| 0.1.1 | 2025-10-12 |  |  |  |  |
| 0.1.0 | 2025-10-11 |  |  |  |  |
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

Generated: 2026-06-07 06:29:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1202, 1169, 1493, 1561, 1620, 1773, 1778, 1790, 1906]
  line "STC (8.0+0.08s)" [1202, 1169, 1493, 1561, 1620, 1773, 1778, 1790, 1906]
  line "LTC (60.0+0.60s)" [1416, 1565, 1682, 1781, 1910, 2009, 2117, 2055, 2174]
  line "VLTC (2m24s+1.12s)" [1512, 1623, 1809, 1929, 1986, 2161, 2167, 2209, 2261]
  line "VLTC (2m24s+1.12s)" [1512, 1623, 1809, 1929, 1986, 2161, 2167, 2209, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 29 | 410 | 52% | 2245 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 28 | 458 | 52% | 2153 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1906 | 28 | 482 | 49% | 1912 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 36 | 278 | 54% | 2168 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 36 | 280 | 45% | 2105 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1790 | 41 | 208 | 52% | 1770 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2167 | 32 | 340 | 50% | 2172 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2117 | 39 | 230 | 54% | 2083 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1778 | 41 | 216 | 53% | 1748 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2161 | 36 | 272 | 48% | 2184 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2009 | 40 | 218 | 52% | 1994 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1773 | 41 | 206 | 51% | 1766 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1986 | 39 | 224 | 50% | 1986 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 39 | 232 | 49% | 1924 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1620 | 44 | 182 | 49% | 1625 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1929 | 38 | 254 | 46% | 1968 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1781 | 41 | 216 | 50% | 1778 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1561 | 43 | 198 | 49% | 1565 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1809 | 38 | 258 | 55% | 1752 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1682 | 45 | 178 | 47% | 1715 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1493 | 48 | 160 | 53% | 1463 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1623 | 48 | 162 | 51% | 1609 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1565 | 46 | 178 | 46% | 1605 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1169 | 65 | 80 | 47% | 1197 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1512 | 37 | 290 | 42% | 1644 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1416 | 43 | 218 | 48% | 1453 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1202 | 118 | 30 | 33% | 1404 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |