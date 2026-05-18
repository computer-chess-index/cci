# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2500<sub>(+106) | 2866<sub>(+128) | 2988<sub>(+129) |  |
| 7.0 | 2026-04-25 | 2394<sub>(+34) | 2738<sub>(+65) | 2859<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2360<sub>(+328) | 2673<sub>(+219) | 2820<sub>(+216) |  |
| 5.0 | 2026-04-15 | 2032<sub>(+50) | 2454<sub>(+171) | 2604<sub>(+160) |  |
| 4.0 | 2026-04-11 | 1982<sub>(+231) | 2283<sub>(+170) | 2444<sub>(+179) |  |
| 3.0 | 2026-04-09 | 1751<sub>(+622) | 2113<sub>(+760) | 2265<sub>(+679) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+388) | 1353<sub>(+534) | 1586<sub>(+663) |  |
| 1.0 | 2026-04-06 | 741 | 819 | 923 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:26:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [741, 1129, 1751, 1982, 2032, 2360, 2394, 2500]
  line "STC (8.0+0.08s)" [741, 1129, 1751, 1982, 2032, 2360, 2394, 2500]
  line "LTC (60.0+0.60s)" [819, 1353, 2113, 2283, 2454, 2673, 2738, 2866]
  line "VLTC (2m24s+1.12s)" [923, 1586, 2265, 2444, 2604, 2820, 2859, 2988]
  line "VLTC (2m24s+1.12s)" [923, 1586, 2265, 2444, 2604, 2820, 2859, 2988]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2988 | 32 | 306 | 50% | 2992 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 34 | 278 | 50% | 2863 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2500 | 34 | 304 | 51% | 2489 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 34 | 270 | 52% | 2843 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2738 | 35 | 266 | 50% | 2741 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2394 | 33 | 320 | 48% | 2418 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 36 | 248 | 52% | 2803 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2673 | 36 | 274 | 51% | 2662 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 32 | 344 | 54% | 2322 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 33 | 324 | 49% | 2616 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2454 | 36 | 268 | 50% | 2453 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 36 | 276 | 50% | 2032 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 34 | 310 | 54% | 2404 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2283 | 36 | 272 | 49% | 2295 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 39 | 248 | 52% | 1964 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2265 | 40 | 232 | 51% | 2260 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2113 | 39 | 246 | 48% | 2133 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1751 | 43 | 208 | 47% | 1782 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1586 | 34 | 316 | 48% | 1617 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1353 | 39 | 258 | 46% | 1408 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1103 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 923 | 80 | 110 | 38% | 1087 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 819 | 85 | 104 | 37% | 1041 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 741 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |