# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2666<sub>(+114) | 3024<sub>(+99) | 3054<sub>(+77) |  |
| 0.30 | 2026-05-01 | 2552<sub>(+17) | 2925<sub>(+118) | 2977<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2535<sub>(+89) | 2807<sub>(+96) | 2885<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2446<sub>(+532) | 2711<sub>(+602) | 2770<sub>(+567) |  |
| 0.08 | 2026-02-05 | 1914 | 2109 | 2203 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:24:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1914, 2446, 2535, 2552, 2666]
  line "STC (8.0+0.08s)" [1914, 2446, 2535, 2552, 2666]
  line "LTC (60.0+0.60s)" [2109, 2711, 2807, 2925, 3024]
  line "VLTC (2m24s+1.12s)" [2203, 2770, 2885, 2977, 3054]
  line "VLTC (2m24s+1.12s)" [2203, 2770, 2885, 2977, 3054]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 44 | 152 | 52% | 3040 | 44% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 3024 | 47 | 128 | 50% | 3027 | 51% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2666 | 44 | 172 | 51% | 2653 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2977 | 32 | 300 | 51% | 2969 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2925 | 30 | 336 | 49% | 2935 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2552 | 36 | 280 | 50% | 2547 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2885 | 31 | 328 | 51% | 2880 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 32 | 312 | 50% | 2808 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2535 | 31 | 356 | 51% | 2526 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2770 | 36 | 236 | 55% | 2719 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 36 | 228 | 57% | 2647 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2446 | 37 | 236 | 55% | 2400 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 28 | 392 | 46% | 2253 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2109 | 29 | 384 | 48% | 2136 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1914 | 31 | 356 | 48% | 1939 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |