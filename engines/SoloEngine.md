# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2268<sub>(+97) | 2606<sub>(+144) | 2746<sub>(+149) |  |
| 1.6.0 | 2026-03-14 | 2171<sub>(+149) | 2462<sub>(+132) | 2597<sub>(+160) |  |
| 1.5.0 | 2026-03-04 | 2022<sub>(+253) | 2330<sub>(+248) | 2437<sub>(+236) |  |
| 1.4.0 | 2026-02-07 | 1769<sub>(+134) | 2082<sub>(+103) | 2201<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1635<sub>(-26) | 1979<sub>(+17) | 2074<sub>(+50) |  |
| 1.2.2 | 2026-01-23 | 1661 | 1962 | 2024 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:28:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 2800
  line "STC (8.0+0.08s)" [1661, 1635, 1769, 2022, 2171, 2268]
  line "STC (8.0+0.08s)" [1661, 1635, 1769, 2022, 2171, 2268]
  line "LTC (60.0+0.60s)" [1962, 1979, 2082, 2330, 2462, 2606]
  line "VLTC (2m24s+1.12s)" [2024, 2074, 2201, 2437, 2597, 2746]
  line "VLTC (2m24s+1.12s)" [2024, 2074, 2201, 2437, 2597, 2746]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2746 | 27 | 436 | 52% | 2730 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2606 | 31 | 328 | 49% | 2611 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2268 | 31 | 348 | 52% | 2250 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 34 | 280 | 50% | 2593 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2462 | 32 | 332 | 51% | 2452 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2171 | 35 | 288 | 49% | 2187 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 30 | 380 | 48% | 2456 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2330 | 37 | 252 | 52% | 2314 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2022 | 35 | 288 | 54% | 1982 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 36 | 264 | 49% | 2210 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2082 | 40 | 206 | 53% | 2060 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1769 | 43 | 180 | 51% | 1759 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2074 | 40 | 204 | 52% | 2059 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1979 | 46 | 164 | 51% | 1974 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1635 | 42 | 208 | 47% | 1661 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2024 | 38 | 260 | 46% | 2093 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1962 | 43 | 204 | 46% | 2025 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1661 | 41 | 232 | 47% | 1715 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |