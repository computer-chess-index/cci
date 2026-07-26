# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260704 | 2026-07-04 | 3016<sub>(+620) | 3190<sub>(+528) | 3245<sub>(+534) |  |
| 20260628 | 2026-06-28 | 2396<sub>(-2) | 2662<sub>(+21) | 2711<sub>(-24) |  |
| 20260616 | 2026-06-16 | 2398<sub>(+new) | 2641<sub>(+new) | 2735<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260704" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-26 06:22:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2398, 2396, 3016]
  line "STC (8.0+0.08s)" [2398, 2396, 3016]
  line "LTC (60.0+0.60s)" [2641, 2662, 3190]
  line "VLTC (2m24s+1.12s)" [2735, 2711, 3245]
  line "VLTC (2m24s+1.12s)" [2735, 2711, 3245]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 33 | 272 | 55% | 3204 | 49% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 32 | 280 | 52% | 3167 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3016 | 34 | 280 | 54% | 2975 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 46 | 148 | 51% | 2701 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2662 | 53 | 116 | 49% | 2670 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2396 | 53 | 116 | 50% | 2395 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2735 | 47 | 144 | 51% | 2724 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2641 | 47 | 148 | 46% | 2674 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2398 | 41 | 196 | 44% | 2457 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |